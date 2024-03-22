import { ReservationOrderByWithRelationInput } from "../inputs/ReservationOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AddressOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    long?: "asc" | "desc" | undefined;
    note?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    reservation?: ReservationOrderByWithRelationInput | undefined;
}
