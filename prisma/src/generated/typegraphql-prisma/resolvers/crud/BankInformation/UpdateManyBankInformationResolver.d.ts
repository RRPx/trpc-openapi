import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBankInformationArgs } from "./args/UpdateManyBankInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBankInformationResolver {
    updateManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBankInformationArgs): Promise<AffectedRowsOutput>;
}
