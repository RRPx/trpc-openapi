import { OptionMasterOrderByWithRelationInput } from "../../../inputs/OptionMasterOrderByWithRelationInput";
import { OptionMasterWhereInput } from "../../../inputs/OptionMasterWhereInput";
import { OptionMasterWhereUniqueInput } from "../../../inputs/OptionMasterWhereUniqueInput";
export declare class ReservationOption_idArgs {
    where?: OptionMasterWhereInput | undefined;
    orderBy?: OptionMasterOrderByWithRelationInput[] | undefined;
    cursor?: OptionMasterWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "option_menu" | "fee" | "is_display" | "created_at" | "updated_at"> | undefined;
}
