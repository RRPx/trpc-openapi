import { BoolFilter } from "../inputs/BoolFilter";
import { CastListRelationFilter } from "../inputs/CastListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserRankWhereInput {
    AND?: UserRankWhereInput[] | undefined;
    OR?: UserRankWhereInput[] | undefined;
    NOT?: UserRankWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    basic_fee?: IntNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    cast?: CastListRelationFilter | undefined;
}
