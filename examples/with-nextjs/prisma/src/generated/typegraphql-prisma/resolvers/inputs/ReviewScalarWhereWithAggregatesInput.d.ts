import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumApprovalWithAggregatesFilter } from "../inputs/EnumApprovalWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReviewScalarWhereWithAggregatesInput {
    AND?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    cast_id?: StringWithAggregatesFilter | undefined;
    client_id?: StringWithAggregatesFilter | undefined;
    nick_name?: StringWithAggregatesFilter | undefined;
    score?: StringWithAggregatesFilter | undefined;
    reviews?: StringWithAggregatesFilter | undefined;
    approval?: EnumApprovalWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
}
