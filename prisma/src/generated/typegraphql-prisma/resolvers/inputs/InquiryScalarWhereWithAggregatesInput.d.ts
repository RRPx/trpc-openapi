import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumInquirerRoleWithAggregatesFilter } from "../inputs/EnumInquirerRoleWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InquiryScalarWhereWithAggregatesInput {
    AND?: InquiryScalarWhereWithAggregatesInput[] | undefined;
    OR?: InquiryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InquiryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    content?: StringWithAggregatesFilter | undefined;
    is_seen?: BoolWithAggregatesFilter | undefined;
    inquirerRole?: EnumInquirerRoleWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
}
