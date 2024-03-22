import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNotificationOrThrowArgs } from "./args/FindFirstNotificationOrThrowArgs";
import { Notification } from "../../../models/Notification";
export declare class FindFirstNotificationOrThrowResolver {
    findFirstNotificationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstNotificationOrThrowArgs): Promise<Notification | null>;
}
