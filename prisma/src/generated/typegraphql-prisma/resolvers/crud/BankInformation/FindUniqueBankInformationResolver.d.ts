import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBankInformationArgs } from "./args/FindUniqueBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class FindUniqueBankInformationResolver {
    bankInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBankInformationArgs): Promise<BankInformation | null>;
}
