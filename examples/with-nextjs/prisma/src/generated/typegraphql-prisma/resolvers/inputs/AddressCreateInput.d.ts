import { ReservationCreateNestedOneWithoutAddressInput } from "../inputs/ReservationCreateNestedOneWithoutAddressInput";
export declare class AddressCreateInput {
    id?: string | undefined;
    lat: string;
    long: string;
    note?: string | undefined;
    address?: string | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    reservation?: ReservationCreateNestedOneWithoutAddressInput | undefined;
}
