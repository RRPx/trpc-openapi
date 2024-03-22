import { ReservationUncheckedCreateNestedOneWithoutAddressInput } from "../inputs/ReservationUncheckedCreateNestedOneWithoutAddressInput";
export declare class AddressUncheckedCreateInput {
    id?: string | undefined;
    lat: string;
    long: string;
    note?: string | undefined;
    address?: string | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    reservation?: ReservationUncheckedCreateNestedOneWithoutAddressInput | undefined;
}
