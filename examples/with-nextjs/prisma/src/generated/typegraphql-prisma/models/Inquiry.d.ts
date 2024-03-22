export declare class Inquiry {
    id: string;
    name: string;
    email: string;
    token: string;
    title: string;
    content: string;
    is_seen: boolean;
    inquirerRole: "CAST" | "CLIENT" | "UNREGISTER";
    created_at: Date;
}
