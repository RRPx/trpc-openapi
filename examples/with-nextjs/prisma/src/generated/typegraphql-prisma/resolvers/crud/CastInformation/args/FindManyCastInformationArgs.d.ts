import { CastInformationOrderByWithRelationInput } from "../../../inputs/CastInformationOrderByWithRelationInput";
import { CastInformationWhereInput } from "../../../inputs/CastInformationWhereInput";
import { CastInformationWhereUniqueInput } from "../../../inputs/CastInformationWhereUniqueInput";
export declare class FindManyCastInformationArgs {
    where?: CastInformationWhereInput | undefined;
    orderBy?: CastInformationOrderByWithRelationInput[] | undefined;
    cursor?: CastInformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "cast_id" | "age" | "height" | "blood_type" | "personality" | "user_image_main" | "user_image_sub1" | "user_image_sub2" | "user_image_sub3" | "user_image_sub4" | "liquor" | "smoking" | "hobby" | "like_spot" | "self_introduction" | "pick_up" | "is_display" | "created_at" | "updated_at"> | undefined;
}
