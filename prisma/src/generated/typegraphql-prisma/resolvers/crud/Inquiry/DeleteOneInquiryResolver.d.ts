import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneInquiryArgs } from "./args/DeleteOneInquiryArgs";
import { Inquiry } from "../../../models/Inquiry";
export declare class DeleteOneInquiryResolver {
    deleteOneInquiry(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInquiryArgs): Promise<Inquiry | null>;
}
