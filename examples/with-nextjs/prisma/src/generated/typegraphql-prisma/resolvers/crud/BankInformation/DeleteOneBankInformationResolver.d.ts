import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBankInformationArgs } from "./args/DeleteOneBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
export declare class DeleteOneBankInformationResolver {
    deleteOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBankInformationArgs): Promise<BankInformation | null>;
}
