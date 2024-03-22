import { Cast } from "../models/Cast";
import { Reservation } from "../models/Reservation";
import { OptionMasterCount } from "../resolvers/outputs/OptionMasterCount";
export declare class OptionMaster {
    id: string;
    option_menu: string;
    fee: number;
    cast?: Cast[];
    reservation?: Reservation[];
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count?: OptionMasterCount | null;
}
