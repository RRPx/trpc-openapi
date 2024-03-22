import { CastOrderByWithRelationInput } from "../inputs/CastOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CastInformationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    cast_id?: "asc" | "desc" | undefined;
    age?: SortOrderInput | undefined;
    height?: SortOrderInput | undefined;
    blood_type?: SortOrderInput | undefined;
    personality?: SortOrderInput | undefined;
    user_image_main?: "asc" | "desc" | undefined;
    user_image_sub1?: SortOrderInput | undefined;
    user_image_sub2?: SortOrderInput | undefined;
    user_image_sub3?: SortOrderInput | undefined;
    user_image_sub4?: SortOrderInput | undefined;
    liquor?: SortOrderInput | undefined;
    smoking?: SortOrderInput | undefined;
    hobby?: SortOrderInput | undefined;
    like_spot?: SortOrderInput | undefined;
    self_introduction?: SortOrderInput | undefined;
    pick_up?: "asc" | "desc" | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    cast?: CastOrderByWithRelationInput | undefined;
}
