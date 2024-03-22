import { CastInformationOrderByWithAggregationInput } from "../../../inputs/CastInformationOrderByWithAggregationInput";
import { CastInformationScalarWhereWithAggregatesInput } from "../../../inputs/CastInformationScalarWhereWithAggregatesInput";
import { CastInformationWhereInput } from "../../../inputs/CastInformationWhereInput";
export declare class GroupByCastInformationArgs {
    where?: CastInformationWhereInput | undefined;
    orderBy?: CastInformationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "cast_id" | "age" | "height" | "blood_type" | "personality" | "user_image_main" | "user_image_sub1" | "user_image_sub2" | "user_image_sub3" | "user_image_sub4" | "liquor" | "smoking" | "hobby" | "like_spot" | "self_introduction" | "pick_up" | "is_display" | "created_at" | "updated_at">;
    having?: CastInformationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
