import { NotificationOrderByWithAggregationInput } from "../../../inputs/NotificationOrderByWithAggregationInput";
import { NotificationScalarWhereWithAggregatesInput } from "../../../inputs/NotificationScalarWhereWithAggregatesInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
export declare class GroupByNotificationArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "category" | "notification_date" | "content" | "cast_id" | "client_id" | "is_seen" | "language" | "targeted_user" | "created_at" | "updated_at">;
    having?: NotificationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
