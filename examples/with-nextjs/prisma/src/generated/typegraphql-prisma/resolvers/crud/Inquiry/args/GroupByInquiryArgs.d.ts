import { InquiryOrderByWithAggregationInput } from "../../../inputs/InquiryOrderByWithAggregationInput";
import { InquiryScalarWhereWithAggregatesInput } from "../../../inputs/InquiryScalarWhereWithAggregatesInput";
import { InquiryWhereInput } from "../../../inputs/InquiryWhereInput";
export declare class GroupByInquiryArgs {
    where?: InquiryWhereInput | undefined;
    orderBy?: InquiryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "email" | "token" | "title" | "content" | "is_seen" | "inquirerRole" | "created_at">;
    having?: InquiryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
