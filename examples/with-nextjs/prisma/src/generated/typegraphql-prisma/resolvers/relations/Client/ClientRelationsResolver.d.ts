import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Favorite } from "../../../models/Favorite";
import { Notification } from "../../../models/Notification";
import { Reservation } from "../../../models/Reservation";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { ClientFavoriteArgs } from "./args/ClientFavoriteArgs";
import { ClientNotificationArgs } from "./args/ClientNotificationArgs";
import { ClientReservationArgs } from "./args/ClientReservationArgs";
import { ClientReviewArgs } from "./args/ClientReviewArgs";
import { ClientUsersArgs } from "./args/ClientUsersArgs";
export declare class ClientRelationsResolver {
    users(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientUsersArgs): Promise<User | null>;
    favorite(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientFavoriteArgs): Promise<Favorite[]>;
    reservation(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientReservationArgs): Promise<Reservation[]>;
    review(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientReviewArgs): Promise<Review[]>;
    notification(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientNotificationArgs): Promise<Notification[]>;
}
