import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCastSideReservationStatusWithAggregatesFilter } from "../inputs/EnumCastSideReservationStatusWithAggregatesFilter";
import { EnumClientSideSlotStatusWithAggregatesFilter } from "../inputs/EnumClientSideSlotStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ShiftManagementScalarWhereWithAggregatesInput {
    AND?: ShiftManagementScalarWhereWithAggregatesInput[] | undefined;
    OR?: ShiftManagementScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ShiftManagementScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    cast_id?: StringWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    shift_date?: DateTimeNullableWithAggregatesFilter | undefined;
    start_time?: DateTimeNullableWithAggregatesFilter | undefined;
    end_time?: DateTimeNullableWithAggregatesFilter | undefined;
    memo?: StringNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    cast_side_reservation_status?: EnumCastSideReservationStatusWithAggregatesFilter | undefined;
    client_side_slot_status?: EnumClientSideSlotStatusWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
    reservationId?: StringNullableWithAggregatesFilter | undefined;
}
