import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumApprovalFilter } from "../inputs/EnumApprovalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReservationScalarWhereInput {
    AND?: ReservationScalarWhereInput[] | undefined;
    OR?: ReservationScalarWhereInput[] | undefined;
    NOT?: ReservationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    cast_id?: StringFilter | undefined;
    client_id?: StringFilter | undefined;
    start_time?: DateTimeFilter | undefined;
    end_time?: DateTimeFilter | undefined;
    guide_flg?: BoolFilter | undefined;
    approval?: EnumApprovalFilter | undefined;
    admin_approval?: EnumApprovalFilter | undefined;
    payment_amount?: IntFilter | undefined;
    payment_select?: StringNullableFilter | undefined;
    payment_id?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    reservation_date?: DateTimeFilter | undefined;
    address_id?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
