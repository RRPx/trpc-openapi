import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneNotificationArgs } from "./args/UpsertOneNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class UpsertOneNotificationResolver {
    upsertOneNotification(ctx: any, info: GraphQLResolveInfo, args: UpsertOneNotificationArgs): Promise<Notification>;
}
