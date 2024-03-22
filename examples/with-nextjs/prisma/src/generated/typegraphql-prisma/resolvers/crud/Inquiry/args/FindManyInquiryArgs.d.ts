import { InquiryOrderByWithRelationInput } from "../../../inputs/InquiryOrderByWithRelationInput";
import { InquiryWhereInput } from "../../../inputs/InquiryWhereInput";
import { InquiryWhereUniqueInput } from "../../../inputs/InquiryWhereUniqueInput";
export declare class FindManyInquiryArgs {
    where?: InquiryWhereInput | undefined;
    orderBy?: InquiryOrderByWithRelationInput[] | undefined;
    cursor?: InquiryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "email" | "token" | "title" | "content" | "is_seen" | "inquirerRole" | "created_at"> | undefined;
}
