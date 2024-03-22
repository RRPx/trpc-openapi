import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneInquiryArgs } from "./args/UpdateOneInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class UpdateOneInquiryResolver {
    updateOneInquiry(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInquiryArgs): Promise<Inquiry | null>;
}
