import { CastCreateNestedManyWithoutUser_rankInput } from "../inputs/CastCreateNestedManyWithoutUser_rankInput";
export declare class UserRankCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    basic_fee?: number | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastCreateNestedManyWithoutUser_rankInput | undefined;
}
