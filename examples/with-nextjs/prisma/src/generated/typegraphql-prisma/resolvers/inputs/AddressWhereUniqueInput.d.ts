import { AddressWhereInput } from "../inputs/AddressWhereInput";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReservationNullableRelationFilter } from "../inputs/ReservationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AddressWhereUniqueInput {
    id?: string | undefined;
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    lat?: StringFilter | undefined;
    long?: StringFilter | undefined;
    note?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    reservation?: ReservationNullableRelationFilter | undefined;
}
