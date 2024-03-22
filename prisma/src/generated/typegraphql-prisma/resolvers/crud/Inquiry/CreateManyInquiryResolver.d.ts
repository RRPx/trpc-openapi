import type { GraphQLResolveInfo } from "graphql";
import { CreateManyInquiryArgs } from "./args/CreateManyInquiryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInquiryResolver {
    createManyInquiry(ctx: any, info: GraphQLResolveInfo, args: CreateManyInquiryArgs): Promise<AffectedRowsOutput>;
}
