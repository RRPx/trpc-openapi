export declare class InquiryCreateInput {
    id?: string | undefined;
    name: string;
    email: string;
    token?: string | undefined;
    title: string;
    content: string;
    is_seen?: boolean | undefined;
    inquirerRole?: "CAST" | "CLIENT" | "UNREGISTER" | undefined;
    created_at?: Date | undefined;
}
