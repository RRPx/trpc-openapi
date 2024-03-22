import { NotificationOrderByWithRelationInput } from "../../../inputs/NotificationOrderByWithRelationInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
export declare class FindFirstNotificationOrThrowArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithRelationInput[] | undefined;
    cursor?: NotificationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "category" | "notification_date" | "content" | "cast_id" | "client_id" | "is_seen" | "language" | "targeted_user" | "created_at" | "updated_at"> | undefined;
}
