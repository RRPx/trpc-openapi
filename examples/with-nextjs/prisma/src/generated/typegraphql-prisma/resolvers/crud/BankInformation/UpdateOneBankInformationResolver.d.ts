import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBankInformationArgs } from "./args/UpdateOneBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class UpdateOneBankInformationResolver {
    updateOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBankInformationArgs): Promise<BankInformation | null>;
}
