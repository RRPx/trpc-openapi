import { FavoriteCountAggregate } from "../outputs/FavoriteCountAggregate";
import { FavoriteMaxAggregate } from "../outputs/FavoriteMaxAggregate";
import { FavoriteMinAggregate } from "../outputs/FavoriteMinAggregate";
export declare class FavoriteGroupBy {
    id: string;
    client_id: string | null;
    cast_id: string | null;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count: FavoriteCountAggregate | null;
    _min: FavoriteMinAggregate | null;
    _max: FavoriteMaxAggregate | null;
}
