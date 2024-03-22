import { CastCreateNestedOneWithoutReviewInput } from "../inputs/CastCreateNestedOneWithoutReviewInput";
import { ClientCreateNestedOneWithoutReviewInput } from "../inputs/ClientCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateInput {
    id?: string | undefined;
    nick_name: string;
    score: string;
    reviews: string;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    cast: CastCreateNestedOneWithoutReviewInput;
    client: ClientCreateNestedOneWithoutReviewInput;
}
