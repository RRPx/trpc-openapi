import type { GraphQLResolveInfo } from "graphql";
import { FindManyBankInformationArgs } from "./args/FindManyBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class FindManyBankInformationResolver {
    bankInformations(ctx: any, info: GraphQLResolveInfo, args: FindManyBankInformationArgs): Promise<BankInformation[]>;
}
