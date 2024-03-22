import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OptionMasterScalarWhereInput {
    AND?: OptionMasterScalarWhereInput[] | undefined;
    OR?: OptionMasterScalarWhereInput[] | undefined;
    NOT?: OptionMasterScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    option_menu?: StringFilter | undefined;
    fee?: IntFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
