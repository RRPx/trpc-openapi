import { InquiryCountAggregate } from "../outputs/InquiryCountAggregate";
import { InquiryMaxAggregate } from "../outputs/InquiryMaxAggregate";
import { InquiryMinAggregate } from "../outputs/InquiryMinAggregate";
export declare class AggregateInquiry {
    _count: InquiryCountAggregate | null;
    _min: InquiryMinAggregate | null;
    _max: InquiryMaxAggregate | null;
}
