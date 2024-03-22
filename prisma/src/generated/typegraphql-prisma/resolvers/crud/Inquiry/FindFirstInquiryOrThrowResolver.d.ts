import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInquiryOrThrowArgs } from "./args/FindFirstInquiryOrThrowArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class FindFirstInquiryOrThrowResolver {
    findFirstInquiryOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInquiryOrThrowArgs): Promise<Inquiry | null>;
}
