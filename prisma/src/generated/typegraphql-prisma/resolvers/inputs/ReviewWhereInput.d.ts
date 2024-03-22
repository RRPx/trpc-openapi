import { BoolFilter } from "../inputs/BoolFilter";
import { CastRelationFilter } from "../inputs/CastRelationFilter";
import { ClientRelationFilter } from "../inputs/ClientRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumApprovalFilter } from "../inputs/EnumApprovalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReviewWhereInput {
    AND?: ReviewWhereInput[] | undefined;
    OR?: ReviewWhereInput[] | undefined;
    NOT?: ReviewWhereInput[] | undefined;
    id?: StringFilter | undefined;
    cast_id?: StringFilter | undefined;
    client_id?: StringFilter | undefined;
    nick_name?: StringFilter | undefined;
    score?: StringFilter | undefined;
    reviews?: StringFilter | undefined;
    approval?: EnumApprovalFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    cast?: CastRelationFilter | undefined;
    client?: ClientRelationFilter | undefined;
}
