import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBankInformationArgs } from "./args/DeleteManyBankInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBankInformationResolver {
    deleteManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBankInformationArgs): Promise<AffectedRowsOutput>;
}
