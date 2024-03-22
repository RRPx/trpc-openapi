import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OptionMasterScalarWhereWithAggregatesInput {
    AND?: OptionMasterScalarWhereWithAggregatesInput[] | undefined;
    OR?: OptionMasterScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OptionMasterScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    option_menu?: StringWithAggregatesFilter | undefined;
    fee?: IntWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
