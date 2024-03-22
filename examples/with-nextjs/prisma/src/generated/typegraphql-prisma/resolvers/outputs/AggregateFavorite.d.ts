import { FavoriteCountAggregate } from "../outputs/FavoriteCountAggregate";
import { FavoriteMaxAggregate } from "../outputs/FavoriteMaxAggregate";
import { FavoriteMinAggregate } from "../outputs/FavoriteMinAggregate";
export declare class AggregateFavorite {
    _count: FavoriteCountAggregate | null;
    _min: FavoriteMinAggregate | null;
    _max: FavoriteMaxAggregate | null;
}
