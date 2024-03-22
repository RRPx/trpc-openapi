import type { GraphQLResolveInfo } from "graphql";
import { FindManyInquiryArgs } from "./args/FindManyInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class FindManyInquiryResolver {
    inquiries(ctx: any, info: GraphQLResolveInfo, args: FindManyInquiryArgs): Promise<Inquiry[]>;
}
