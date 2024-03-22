import { Cast } from "../models/Cast";
import { UserRankCount } from "../resolvers/outputs/UserRankCount";
export declare class UserRank {
    id: string;
    cast?: Cast[];
    name?: string | null;
    basic_fee?: number | null;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count?: UserRankCount | null;
}
