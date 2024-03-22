import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyInquiryArgs } from "./args/UpdateManyInquiryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInquiryResolver {
    updateManyInquiry(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInquiryArgs): Promise<AffectedRowsOutput>;
}
