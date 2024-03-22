import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneNotificationArgs } from "./args/UpdateOneNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class UpdateOneNotificationResolver {
    updateOneNotification(ctx: any, info: GraphQLResolveInfo, args: UpdateOneNotificationArgs): Promise<Notification | null>;
}
