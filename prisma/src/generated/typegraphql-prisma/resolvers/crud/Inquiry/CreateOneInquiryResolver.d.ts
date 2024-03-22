import type { GraphQLResolveInfo } from "graphql";
import { CreateOneInquiryArgs } from "./args/CreateOneInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class CreateOneInquiryResolver {
    createOneInquiry(ctx: any, info: GraphQLResolveInfo, args: CreateOneInquiryArgs): Promise<Inquiry>;
}
