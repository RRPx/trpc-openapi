import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Cast } from "../../../models/Cast";
import { Client } from "../../../models/Client";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserCastArgs } from "./args/UserCastArgs";
import { UserClientArgs } from "./args/UserClientArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    client(user: User, ctx: any, info: GraphQLResolveInfo, args: UserClientArgs): Promise<Client | null>;
    cast(user: User, ctx: any, info: GraphQLResolveInfo, args: UserCastArgs): Promise<Cast | null>;
}
