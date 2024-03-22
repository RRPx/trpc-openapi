import type { GraphQLResolveInfo } from "graphql";
import { CreateOneNotificationArgs } from "./args/CreateOneNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class CreateOneNotificationResolver {
    createOneNotification(ctx: any, info: GraphQLResolveInfo, args: CreateOneNotificationArgs): Promise<Notification>;
}
