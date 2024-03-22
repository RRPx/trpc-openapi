import { InquiryCountOrderByAggregateInput } from "../inputs/InquiryCountOrderByAggregateInput";
import { InquiryMaxOrderByAggregateInput } from "../inputs/InquiryMaxOrderByAggregateInput";
import { InquiryMinOrderByAggregateInput } from "../inputs/InquiryMinOrderByAggregateInput";
export declare class InquiryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    is_seen?: "asc" | "desc" | undefined;
    inquirerRole?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: InquiryCountOrderByAggregateInput | undefined;
    _max?: InquiryMaxOrderByAggregateInput | undefined;
    _min?: InquiryMinOrderByAggregateInput | undefined;
}
