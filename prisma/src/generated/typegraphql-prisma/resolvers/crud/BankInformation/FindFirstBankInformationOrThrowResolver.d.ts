import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBankInformationOrThrowArgs } from "./args/FindFirstBankInformationOrThrowArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class FindFirstBankInformationOrThrowResolver {
    findFirstBankInformationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBankInformationOrThrowArgs): Promise<BankInformation | null>;
}
