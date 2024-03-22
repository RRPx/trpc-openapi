import { CastOrderByWithRelationInput } from "../inputs/CastOrderByWithRelationInput";
import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class NotificationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    category?: SortOrderInput | undefined;
    notification_date?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    cast_id?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    is_seen?: "asc" | "desc" | undefined;
    language?: SortOrderInput | undefined;
    targeted_user?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    cast?: CastOrderByWithRelationInput | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
}
