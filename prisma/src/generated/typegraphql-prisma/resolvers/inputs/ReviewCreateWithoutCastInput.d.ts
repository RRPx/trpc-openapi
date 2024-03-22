import { ClientCreateNestedOneWithoutReviewInput } from "../inputs/ClientCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateWithoutCastInput {
    id?: string | undefined;
    nick_name: string;
    score: string;
    reviews: string;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    client: ClientCreateNestedOneWithoutReviewInput;
}
