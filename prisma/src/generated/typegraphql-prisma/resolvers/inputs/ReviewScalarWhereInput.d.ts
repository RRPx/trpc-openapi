import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumApprovalFilter } from "../inputs/EnumApprovalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReviewScalarWhereInput {
    AND?: ReviewScalarWhereInput[] | undefined;
    OR?: ReviewScalarWhereInput[] | undefined;
    NOT?: ReviewScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    cast_id?: StringFilter | undefined;
    client_id?: StringFilter | undefined;
    nick_name?: StringFilter | undefined;
    score?: StringFilter | undefined;
    reviews?: StringFilter | undefined;
    approval?: EnumApprovalFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
}
