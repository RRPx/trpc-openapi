import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBankInformationOrThrowArgs } from "./args/FindUniqueBankInformationOrThrowArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class FindUniqueBankInformationOrThrowResolver {
    getBankInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBankInformationOrThrowArgs): Promise<BankInformation | null>;
}
