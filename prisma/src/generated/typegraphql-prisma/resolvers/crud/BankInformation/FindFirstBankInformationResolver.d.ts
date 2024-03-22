import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBankInformationArgs } from "./args/FindFirstBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class FindFirstBankInformationResolver {
    findFirstBankInformation(ctx: any, info: GraphQLResolveInfo, args: FindFirstBankInformationArgs): Promise<BankInformation | null>;
}
