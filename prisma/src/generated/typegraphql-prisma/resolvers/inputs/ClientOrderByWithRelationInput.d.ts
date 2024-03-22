import { FavoriteOrderByRelationAggregateInput } from "../inputs/FavoriteOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { ReservationOrderByRelationAggregateInput } from "../inputs/ReservationOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ClientOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    telephone_number?: SortOrderInput | undefined;
    birthday?: SortOrderInput | undefined;
    age?: SortOrderInput | undefined;
    nick_name?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    gender?: SortOrderInput | undefined;
    image2?: SortOrderInput | undefined;
    image3?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    users?: UserOrderByWithRelationInput | undefined;
    favorite?: FavoriteOrderByRelationAggregateInput | undefined;
    reservation?: ReservationOrderByRelationAggregateInput | undefined;
    review?: ReviewOrderByRelationAggregateInput | undefined;
    notification?: NotificationOrderByRelationAggregateInput | undefined;
}
