import { OptionMasterOrderByWithAggregationInput } from "../../../inputs/OptionMasterOrderByWithAggregationInput";
import { OptionMasterScalarWhereWithAggregatesInput } from "../../../inputs/OptionMasterScalarWhereWithAggregatesInput";
import { OptionMasterWhereInput } from "../../../inputs/OptionMasterWhereInput";
export declare class GroupByOptionMasterArgs {
    where?: OptionMasterWhereInput | undefined;
    orderBy?: OptionMasterOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "option_menu" | "fee" | "is_display" | "created_at" | "updated_at">;
    having?: OptionMasterScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
