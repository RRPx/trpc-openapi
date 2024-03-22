import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
export declare class ClientGroupBy {
    id: string;
    telephone_number: string | null;
    birthday: Date | null;
    age: string | null;
    nick_name: string | null;
    image: string | null;
    gender: "male" | "female" | null;
    image2: string | null;
    image3: string | null;
    is_display: boolean;
    created_at: Date;
    _count: ClientCountAggregate | null;
    _min: ClientMinAggregate | null;
    _max: ClientMaxAggregate | null;
}
