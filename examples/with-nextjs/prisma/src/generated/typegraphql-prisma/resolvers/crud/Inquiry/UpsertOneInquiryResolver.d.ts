import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneInquiryArgs } from "./args/UpsertOneInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class UpsertOneInquiryResolver {
    upsertOneInquiry(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInquiryArgs): Promise<Inquiry>;
}
