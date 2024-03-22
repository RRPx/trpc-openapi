import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInquiryArgs } from "./args/FindUniqueInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class FindUniqueInquiryResolver {
    inquiry(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInquiryArgs): Promise<Inquiry | null>;
}
