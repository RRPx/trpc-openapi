import { CastCreateNestedOneWithoutReviewInput } from "../inputs/CastCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateWithoutClientInput {
    id?: string | undefined;
    nick_name: string;
    score: string;
    reviews: string;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    cast: CastCreateNestedOneWithoutReviewInput;
}
