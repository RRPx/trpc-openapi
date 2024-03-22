import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';
import { ClientController } from './client.controller';
import { ClientZodSchema, clientReserveValidation } from './client.validation';

export const clientRouter = createTRPCRouter({
  createClientInfo: publicProcedure
    .input(ClientZodSchema.clientInfoValidation)
    .mutation(({ input }) => {
      return ClientController.insertNewClientIntoDB(input);
    }),
  getClientAccount: publicProcedure.input(ClientZodSchema.params).query(({ input }) => {
    return ClientController.getClientAccountHandler(input.id);
  }),

  getReservationClientInfo: publicProcedure
    .input(z.object({ id: z.string(), Cast_id: z.string() }))
    .query(({ input }) => {
      return ClientController.getSingleClientInformation(input.id, input.Cast_id);
    }),

  updateAccountInfo: publicProcedure
    .input(ClientZodSchema.updateAccountInfoSchema)
    .mutation(({ input }) => ClientController.updateAccountHandler(input)),
  getSingleClientReservationData: publicProcedure
    .input(clientReserveValidation)
    .query(({ input }) => {
      return ClientController.handleClientInfoMyPage(input.id);
    }),
  getFavourites: publicProcedure.input(ClientZodSchema.params).query(({ input }) => {
    return ClientController.getFavoritesHandler(input.id);
  }),
});
