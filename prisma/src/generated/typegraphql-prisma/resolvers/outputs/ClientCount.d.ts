import { ClientCountFavoriteArgs } from "./args/ClientCountFavoriteArgs";
import { ClientCountNotificationArgs } from "./args/ClientCountNotificationArgs";
import { ClientCountReservationArgs } from "./args/ClientCountReservationArgs";
import { ClientCountReviewArgs } from "./args/ClientCountReviewArgs";
export declare class ClientCount {
    favorite: number;
    reservation: number;
    review: number;
    notification: number;
    getFavorite(root: ClientCount, args: ClientCountFavoriteArgs): number;
    getReservation(root: ClientCount, args: ClientCountReservationArgs): number;
    getReview(root: ClientCount, args: ClientCountReviewArgs): number;
    getNotification(root: ClientCount, args: ClientCountNotificationArgs): number;
}
