import { InquiryCountAggregate } from "../outputs/InquiryCountAggregate";
import { InquiryMaxAggregate } from "../outputs/InquiryMaxAggregate";
import { InquiryMinAggregate } from "../outputs/InquiryMinAggregate";
export declare class InquiryGroupBy {
    id: string;
    name: string;
    email: string;
    token: string;
    title: string;
    content: string;
    is_seen: boolean;
    inquirerRole: "CAST" | "CLIENT" | "UNREGISTER";
    created_at: Date;
    _count: InquiryCountAggregate | null;
    _min: InquiryMinAggregate | null;
    _max: InquiryMaxAggregate | null;
}
