import { ReservationCountOption_idArgs } from "./args/ReservationCountOption_idArgs";
import { ReservationCountShift_idArgs } from "./args/ReservationCountShift_idArgs";
export declare class ReservationCount {
    option_id: number;
    shift_id: number;
    getOption_id(root: ReservationCount, args: ReservationCountOption_idArgs): number;
    getShift_id(root: ReservationCount, args: ReservationCountShift_idArgs): number;
}
