import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumCastSideReservationStatusFilter } from "../inputs/EnumCastSideReservationStatusFilter";
import { EnumClientSideSlotStatusFilter } from "../inputs/EnumClientSideSlotStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ShiftManagementScalarWhereInput {
    AND?: ShiftManagementScalarWhereInput[] | undefined;
    OR?: ShiftManagementScalarWhereInput[] | undefined;
    NOT?: ShiftManagementScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    cast_id?: StringFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    shift_date?: DateTimeNullableFilter | undefined;
    start_time?: DateTimeNullableFilter | undefined;
    end_time?: DateTimeNullableFilter | undefined;
    memo?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    cast_side_reservation_status?: EnumCastSideReservationStatusFilter | undefined;
    client_side_slot_status?: EnumClientSideSlotStatusFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    reservationId?: StringNullableFilter | undefined;
}
