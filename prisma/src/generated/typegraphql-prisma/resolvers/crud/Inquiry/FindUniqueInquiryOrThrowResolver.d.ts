import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInquiryOrThrowArgs } from "./args/FindUniqueInquiryOrThrowArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class FindUniqueInquiryOrThrowResolver {
    getInquiry(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInquiryOrThrowArgs): Promise<Inquiry | null>;
}
