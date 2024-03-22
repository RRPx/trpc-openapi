import { TRPCError } from '@trpc/server';
import { type IClient, type IResponse, type clientInfoFormValues } from 'types/common/types';

import { db } from '../db';
import { type UpdateAccountInfoInput } from './client.validation';

const postClientInfo = async (input: clientInfoFormValues) => {
  try {
    const result = await db.client.create({
      data: {
        nick_name: input.nickName,
        telephone_number: input.telephone_number,
        birthday: input.birthday,
        age: input.age,
        image: input.image,
        image2: input.image2,
        image3: input.image3,
        gender: input.gender,
        users: {
          create: {
            // name: input.firstName + " " + input.lastName,
            first_name: input.firstName,
            last_name: input.lastName,
            email: input.email,
            firebase_auth_id: input.firebase_auth_id,
          },
        },
      },
      include: {
        users: true,
      },
    });
    return result;
  } catch (error) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to fetch casts: ',
    });
  }
};

const getClientAccountInfo = async (id: string) => {
  const result = await db.user.findUnique({
    where: {
      client_id: id,
    },
    select: {
      id: true,
      last_name: true,
      first_name: true,
      email: true,
      verification_image: true,
      client: true,
    },
  });
  return result;
};

const getFovoriteCasts = async (id: string) => {
  const result = await db.favorite.findMany({
    where: {
      client_id: id,
    },
    select: {
      cast_id: true,
    },
  });

  return result;
};

const updateAccount = async (id: string, payload: Partial<UpdateAccountInfoInput>) => {
  const { first_name, last_name, email, verification_image, ...otherData } = payload;
  const userData = {
    first_name,
    last_name,
    email,
    verification_image,
  };

  await db.$transaction(
    async (transactionClient: {
      user: {
        update: (arg0: {
          where: { client_id: string };
          data: {
            first_name: string | undefined;
            last_name: string | undefined;
            email: string | undefined;
            verification_image: string | undefined;
          };
        }) => any;
      };
      client: {
        update: (arg0: {
          where: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            id: any;
          };
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          data: {
            id?: string | undefined;
            nick_name?: string | undefined;
            age?: string | undefined;
            telephone_number?: string | undefined;
            firebase_auth_id?: string | undefined;
            image?: string | undefined;
            image2?: string | undefined;
            image3?: string | undefined;
          };
        }) => any;
      };
    }) => {
      const result = await transactionClient.user.update({
        where: {
          client_id: id,
        },
        data: userData,
      });

      if (!result)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Cannot update user, try again.',
        });

      await transactionClient.client.update({
        where: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          id: result.client_id,
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data: otherData,
      });
    },
  );

  const responseData = await db.user.findUnique({
    where: {
      client_id: id,
    },
    select: {
      id: true,
      last_name: true,
      first_name: true,
      email: true,
      verification_image: true,
      client: true,
    },
  });

  return responseData;
};

const getClientReservationInfo = async (id: string, Cast_id: string) => {
  try {
    const result = await db.reservation.findUnique({
      where: {
        id,
        cast_id: Cast_id,
      },
      select: {
        id: true,
        start_time: true,
        end_time: true,
        approval: true,
        reservation_date: true,
        address: true,
        option_id: {
          select: {
            option_menu: true,
          },
        },
        client: {
          select: {
            id: true,
            birthday: true,
            nick_name: true,
            age: true,
            gender: true,
            image: true,
            image2: true,
            image3: true,
            users: {
              select: {
                verification_image: true,
              },
            },
          },
        },
      },
    });
    if (!result) {
      return {
        data: null,
      };
    }
    return {
      data: result,
    };
  } catch (error: any) {
    throw error;
  }
};

const getReservationClientInfo = async (id: string): Promise<IResponse<IClient | null>> => {
  try {
    const singleReservationClientInfo = await db.client.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        birthday: true,
        reservation: {
          select: {
            id: true,
            start_time: true,
            end_time: true,
            approval: true,
            payment_amount: true,
            payment_select: true,
            reservation_date: true,
            chat_room: {
              select: {
                id: true,
              },
            },
            option_id: {
              select: {
                option_menu: true,
                fee: true,
              },
            },
            cast: {
              select: {
                id: true,
                nick_name: true,
                locate: true,
                user_rank: {
                  select: {
                    basic_fee: true,
                  },
                },
                cast_information: {
                  select: {
                    age: true,
                    user_image_main: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!singleReservationClientInfo) {
      return {
        data: null,
      };
    }
    return {
      data: singleReservationClientInfo,
    };
  } catch (error: any) {
    throw error;
  }
};

export const ClientService = {
  postClientInfo,
  getReservationClientInfo,
  getClientAccountInfo,
  getClientReservationInfo,
  updateAccount,
  getFovoriteCasts,
};
