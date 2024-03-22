import { CastCountBank_informationArgs } from "./args/CastCountBank_informationArgs";
import { CastCountFavoriteArgs } from "./args/CastCountFavoriteArgs";
import { CastCountNotificationArgs } from "./args/CastCountNotificationArgs";
import { CastCountOption_masterArgs } from "./args/CastCountOption_masterArgs";
import { CastCountReservationArgs } from "./args/CastCountReservationArgs";
import { CastCountReviewArgs } from "./args/CastCountReviewArgs";
import { CastCountShift_managementArgs } from "./args/CastCountShift_managementArgs";
export declare class CastCount {
    favorite: number;
    notification: number;
    option_master: number;
    shift_management: number;
    review: number;
    reservation: number;
    bank_information: number;
    getFavorite(root: CastCount, args: CastCountFavoriteArgs): number;
    getNotification(root: CastCount, args: CastCountNotificationArgs): number;
    getOption_master(root: CastCount, args: CastCountOption_masterArgs): number;
    getShift_management(root: CastCount, args: CastCountShift_managementArgs): number;
    getReview(root: CastCount, args: CastCountReviewArgs): number;
    getReservation(root: CastCount, args: CastCountReservationArgs): number;
    getBank_information(root: CastCount, args: CastCountBank_informationArgs): number;
}
