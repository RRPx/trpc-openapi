import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
export declare class AccountGroupBy {
    id: string;
    userId: string;
    type: string;
    password_hash: string | null;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    _count: AccountCountAggregate | null;
    _avg: AccountAvgAggregate | null;
    _sum: AccountSumAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
