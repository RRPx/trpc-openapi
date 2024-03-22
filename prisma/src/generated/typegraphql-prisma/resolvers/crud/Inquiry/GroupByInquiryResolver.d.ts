import type { GraphQLResolveInfo } from "graphql";
import { GroupByInquiryArgs } from "./args/GroupByInquiryArgs";
import { InquiryGroupBy } from "../../outputs/InquiryGroupBy";
export declare class GroupByInquiryResolver {
    groupByInquiry(ctx: any, info: GraphQLResolveInfo, args: GroupByInquiryArgs): Promise<InquiryGroupBy[]>;
}
