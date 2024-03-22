import { CastCreateNestedOneWithoutNotificationInput } from "../inputs/CastCreateNestedOneWithoutNotificationInput";
import { ClientCreateNestedOneWithoutNotificationInput } from "../inputs/ClientCreateNestedOneWithoutNotificationInput";
export declare class NotificationCreateInput {
    id?: string | undefined;
    title: string;
    category?: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | undefined;
    notification_date: Date;
    content: string;
    is_seen?: boolean | undefined;
    language?: string | undefined;
    targeted_user?: "CAST" | "CLIENT" | "BOTH" | "NONE" | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastCreateNestedOneWithoutNotificationInput | undefined;
    client?: ClientCreateNestedOneWithoutNotificationInput | undefined;
}
