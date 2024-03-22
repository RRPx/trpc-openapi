import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInquirerRoleFilter } from "../inputs/EnumInquirerRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InquiryWhereInput {
    AND?: InquiryWhereInput[] | undefined;
    OR?: InquiryWhereInput[] | undefined;
    NOT?: InquiryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    token?: StringFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringFilter | undefined;
    is_seen?: BoolFilter | undefined;
    inquirerRole?: EnumInquirerRoleFilter | undefined;
    created_at?: DateTimeFilter | undefined;
}
