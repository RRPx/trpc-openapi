import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBankInformationArgs } from "./args/UpsertOneBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class UpsertOneBankInformationResolver {
    upsertOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBankInformationArgs): Promise<BankInformation>;
}
