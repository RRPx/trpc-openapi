import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumApprovalWithAggregatesFilter } from "../inputs/EnumApprovalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReservationScalarWhereWithAggregatesInput {
    AND?: ReservationScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReservationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReservationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    cast_id?: StringWithAggregatesFilter | undefined;
    client_id?: StringWithAggregatesFilter | undefined;
    start_time?: DateTimeWithAggregatesFilter | undefined;
    end_time?: DateTimeWithAggregatesFilter | undefined;
    guide_flg?: BoolWithAggregatesFilter | undefined;
    approval?: EnumApprovalWithAggregatesFilter | undefined;
    admin_approval?: EnumApprovalWithAggregatesFilter | undefined;
    payment_amount?: IntWithAggregatesFilter | undefined;
    payment_select?: StringNullableWithAggregatesFilter | undefined;
    payment_id?: StringNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    reservation_date?: DateTimeWithAggregatesFilter | undefined;
    address_id?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
