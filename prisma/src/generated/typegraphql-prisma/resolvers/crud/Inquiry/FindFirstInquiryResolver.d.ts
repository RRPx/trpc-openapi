import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInquiryArgs } from "./args/FindFirstInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class FindFirstInquiryResolver {
    findFirstInquiry(ctx: any, info: GraphQLResolveInfo, args: FindFirstInquiryArgs): Promise<Inquiry | null>;
}
