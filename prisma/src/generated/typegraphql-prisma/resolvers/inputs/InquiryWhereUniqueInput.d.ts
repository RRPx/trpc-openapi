import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInquirerRoleFilter } from "../inputs/EnumInquirerRoleFilter";
import { InquiryWhereInput } from "../inputs/InquiryWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class InquiryWhereUniqueInput {
    id?: string | undefined;
    AND?: InquiryWhereInput[] | undefined;
    OR?: InquiryWhereInput[] | undefined;
    NOT?: InquiryWhereInput[] | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    token?: StringFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringFilter | undefined;
    is_seen?: BoolFilter | undefined;
    inquirerRole?: EnumInquirerRoleFilter | undefined;
    created_at?: DateTimeFilter | undefined;
}
