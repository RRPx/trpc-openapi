import { OptionMasterCountCastArgs } from "./args/OptionMasterCountCastArgs";
import { OptionMasterCountReservationArgs } from "./args/OptionMasterCountReservationArgs";
export declare class OptionMasterCount {
    cast: number;
    reservation: number;
    getCast(root: OptionMasterCount, args: OptionMasterCountCastArgs): number;
    getReservation(root: OptionMasterCount, args: OptionMasterCountReservationArgs): number;
}
