import { CastUncheckedCreateNestedManyWithoutUser_rankInput } from "../inputs/CastUncheckedCreateNestedManyWithoutUser_rankInput";
export declare class UserRankUncheckedCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    basic_fee?: number | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastUncheckedCreateNestedManyWithoutUser_rankInput | undefined;
}
