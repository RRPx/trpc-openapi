import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBankInformationArgs } from "./args/CreateOneBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class CreateOneBankInformationResolver {
    createOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: CreateOneBankInformationArgs): Promise<BankInformation>;
}
