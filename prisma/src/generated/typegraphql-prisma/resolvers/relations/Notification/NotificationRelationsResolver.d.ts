import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { Client } from "../../../models/Client";
import { Notification } from "../../../models/Notification";
import { NotificationCastArgs } from "./args/NotificationCastArgs";
import { NotificationClientArgs } from "./args/NotificationClientArgs";
export declare class NotificationRelationsResolver {
    cast(notification: Notification, ctx: any, info: GraphQLResolveInfo, args: NotificationCastArgs): Promise<Cast | null>;
    client(notification: Notification, ctx: any, info: GraphQLResolveInfo, args: NotificationClientArgs): Promise<Client | null>;
}
