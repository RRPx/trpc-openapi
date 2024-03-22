import { BoolFilter } from "../inputs/BoolFilter";
import { CastRelationFilter } from "../inputs/CastRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumCastSideReservationStatusFilter } from "../inputs/EnumCastSideReservationStatusFilter";
import { EnumClientSideSlotStatusFilter } from "../inputs/EnumClientSideSlotStatusFilter";
import { ReservationNullableRelationFilter } from "../inputs/ReservationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ShiftManagementWhereInput {
    AND?: ShiftManagementWhereInput[] | undefined;
    OR?: ShiftManagementWhereInput[] | undefined;
    NOT?: ShiftManagementWhereInput[] | undefined;
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
    cast?: CastRelationFilter | undefined;
    Reservation?: ReservationNullableRelationFilter | undefined;
}
