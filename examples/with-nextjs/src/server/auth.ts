/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { type GetServerSidePropsContext } from 'next';
import { type DefaultSession, type NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';

import { db } from './db';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id?: string;
      role?: string;
      // ...other properties
      // role: UserRole;
    };
  }
  interface User {
    role: string;
    name: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token?.role as string;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    EmailProvider({
      server: `smtp://:@email-smtp.ap-northeast-1.amazonaws.com:587`,
      from: process.env.SMTP_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),

    CredentialsProvider({
      name: 'Login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const user = await db.user.findFirst({
            where: { email },
            select: {
              id: true,
              cast_id: true,
              last_name: true,
              first_name: true,
              email: true,
              hash_password: true,
              cast: {
                select: {
                  profile_approval_by_admin: true,
                },
              },
              role: true,
            },
          });

          if (user?.role === 'CAST' && user.cast?.profile_approval_by_admin !== 'APPROVAL') {
            new Error('Account is not approved');
          }

          if (!user?.hash_password || !user?.email) {
            throw new Error('Invalid Credentials');
          }

          const passwordMatch = await bcrypt.compare(password, user.hash_password);

          if (!passwordMatch) {
            throw new Error('Invalid Credentials');
          }

          if (user.role === 'CAST') {
            return {
              id: user.cast_id ?? '',
              name: `${user.first_name} ${user.last_name}`,
              email: user.email,
              role: user.role as string,
            };
          }
          // if role is not cast then role = Admin
          return {
            id: user.id ?? '',
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            role: user.role as string,
          };
        } catch (error) {
          throw new Error('Error authenticating user');
        }
      },
    }),
  ],
  pages: {
    signIn: '/cast/auth/login',
    error: '/404',
    // signOut: "auth/logout",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
