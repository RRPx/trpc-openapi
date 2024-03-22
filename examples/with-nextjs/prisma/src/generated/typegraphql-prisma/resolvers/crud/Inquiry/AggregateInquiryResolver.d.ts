import type { GraphQLResolveInfo } from "graphql";
import { AggregateInquiryArgs } from "./args/AggregateInquiryArgs";
import { AggregateInquiry } from "../../outputs/AggregateInquiry";
export declare class AggregateInquiryResolver {
    aggregateInquiry(ctx: any, info: GraphQLResolveInfo, args: AggregateInquiryArgs): Promise<AggregateInquiry>;
}
