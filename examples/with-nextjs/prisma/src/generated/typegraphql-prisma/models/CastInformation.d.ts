import { Cast } from "../models/Cast";
export declare class CastInformation {
    id: string;
    cast?: Cast;
    cast_id: string;
    age?: number | null;
    height?: number | null;
    blood_type?: string | null;
    personality?: string | null;
    user_image_main: string;
    user_image_sub1?: string | null;
    user_image_sub2?: string | null;
    user_image_sub3?: string | null;
    user_image_sub4?: string | null;
    liquor?: boolean | null;
    smoking?: boolean | null;
    hobby?: string | null;
    like_spot?: string | null;
    self_introduction?: string | null;
    pick_up: boolean;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
}
