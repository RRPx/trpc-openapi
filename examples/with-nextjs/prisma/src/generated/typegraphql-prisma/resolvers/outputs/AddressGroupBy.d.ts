import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
export declare class AddressGroupBy {
    id: string;
    lat: string;
    long: string;
    note: string | null;
    address: string | null;
    is_display: boolean;
    created_at: Date;
    _count: AddressCountAggregate | null;
    _min: AddressMinAggregate | null;
    _max: AddressMaxAggregate | null;
}
