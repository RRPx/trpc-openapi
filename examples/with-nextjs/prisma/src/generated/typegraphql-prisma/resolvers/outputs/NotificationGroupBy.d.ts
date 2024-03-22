import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
export declare class NotificationGroupBy {
    id: string;
    title: string;
    category: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | null;
    notification_date: Date;
    content: string;
    cast_id: string | null;
    client_id: string | null;
    is_seen: boolean;
    language: string | null;
    targeted_user: "CAST" | "CLIENT" | "BOTH" | "NONE";
    created_at: Date;
    updated_at: Date;
    _count: NotificationCountAggregate | null;
    _min: NotificationMinAggregate | null;
    _max: NotificationMaxAggregate | null;
}
