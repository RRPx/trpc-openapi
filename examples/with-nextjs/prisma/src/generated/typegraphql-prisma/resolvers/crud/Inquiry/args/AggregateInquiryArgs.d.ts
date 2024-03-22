import { InquiryOrderByWithRelationInput } from "../../../inputs/InquiryOrderByWithRelationInput";
import { InquiryWhereInput } from "../../../inputs/InquiryWhereInput";
import { InquiryWhereUniqueInput } from "../../../inputs/InquiryWhereUniqueInput";
export declare class AggregateInquiryArgs {
    where?: InquiryWhereInput | undefined;
    orderBy?: InquiryOrderByWithRelationInput[] | undefined;
    cursor?: InquiryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
