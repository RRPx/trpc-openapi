import { TRPCError } from "@trpc/server";
import { type clientInfoFormValues } from "types/common/types";
import { type UpdateAccountInfoInput } from "~/server/api/routers/modules/client/client.validation";
import { ClientService } from "./client.services";

const insertNewClientIntoDB = async (input: clientInfoFormValues) => {
  try {
    const clientInfo = await ClientService.postClientInfo(input);
    return {
      status: true,
      message: "Client added Successfully",
      data: clientInfo,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to add new Client User",
    });
  }
};

const getClientAccountHandler = async (id: string) => {
  try {
    const user = await ClientService.getClientAccountInfo(id);
    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }
    return user;
  } catch (err: any) {
    throw err;
  }
};

const getSingleClientInformation = async (id: string, Cast_id: string) => {
  try {
    const clientInfo = await ClientService.getClientReservationInfo(
      id,
      Cast_id,
    );
    if (!clientInfo) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "client Info not found",
      });
    }
    return clientInfo;
  } catch (err: any) {
    throw err;
  }
};

const updateAccountHandler = async (data: UpdateAccountInfoInput) => {
  try {
    const { id, ...payload } = data;
    const user = await ClientService.updateAccount(id, payload);
    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }
    return user;
  } catch (err: any) {
    throw err;
  }
};

const handleClientInfoMyPage = async (id: string) => {
  try {
    const myPageClientData = await ClientService.getReservationClientInfo(id);
    return {
      status: "success",
      data: myPageClientData.data,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Never get data",
    });
  }
};

const getFavoritesHandler = async (id: string) => {
  try {
    const users = await ClientService.getFovoriteCasts(id);
    if (!users) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Users not found",
      });
    }
    return users;
  } catch (err: any) {
    throw err;
  }
};

export const ClientController = {
  insertNewClientIntoDB,
  getClientAccountHandler,
  updateAccountHandler,
  handleClientInfoMyPage,
  getFavoritesHandler,
  getSingleClientInformation,
};
