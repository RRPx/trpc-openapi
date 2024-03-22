import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneNotificationArgs } from "./args/DeleteOneNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class DeleteOneNotificationResolver {
    deleteOneNotification(ctx: any, info: GraphQLResolveInfo, args: DeleteOneNotificationArgs): Promise<Notification | null>;
}
