export declare class NotificationMinAggregate {
    id: string | null;
    title: string | null;
    category: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | null;
    notification_date: Date | null;
    content: string | null;
    cast_id: string | null;
    client_id: string | null;
    is_seen: boolean | null;
    language: string | null;
    targeted_user: "CAST" | "CLIENT" | "BOTH" | "NONE" | null;
    created_at: Date | null;
    updated_at: Date | null;
}
