import { CastOrderByWithRelationInput } from "../inputs/CastOrderByWithRelationInput";
import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FavoriteOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    client_id?: SortOrderInput | undefined;
    cast_id?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
    cast?: CastOrderByWithRelationInput | undefined;
}
