import { BoolFilter } from "../inputs/BoolFilter";
import { CastListRelationFilter } from "../inputs/CastListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReservationListRelationFilter } from "../inputs/ReservationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OptionMasterWhereInput {
    AND?: OptionMasterWhereInput[] | undefined;
    OR?: OptionMasterWhereInput[] | undefined;
    NOT?: OptionMasterWhereInput[] | undefined;
    id?: StringFilter | undefined;
    option_menu?: StringFilter | undefined;
    fee?: IntFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    cast?: CastListRelationFilter | undefined;
    reservation?: ReservationListRelationFilter | undefined;
}
