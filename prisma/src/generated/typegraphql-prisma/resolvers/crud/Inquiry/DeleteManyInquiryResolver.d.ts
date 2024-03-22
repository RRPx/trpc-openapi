import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyInquiryArgs } from "./args/DeleteManyInquiryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInquiryResolver {
    deleteManyInquiry(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInquiryArgs): Promise<AffectedRowsOutput>;
}
