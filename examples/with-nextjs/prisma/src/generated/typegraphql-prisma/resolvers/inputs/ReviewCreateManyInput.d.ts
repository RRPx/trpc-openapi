export declare class ReviewCreateManyInput {
    id?: string | undefined;
    cast_id: string;
    client_id: string;
    nick_name: string;
    score: string;
    reviews: string;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
}
