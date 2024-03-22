import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNotificationOrThrowArgs } from "./args/FindUniqueNotificationOrThrowArgs";
import { Notification } from "../../../models/Notification";
export declare class FindUniqueNotificationOrThrowResolver {
    getNotification(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNotificationOrThrowArgs): Promise<Notification | null>;
}
