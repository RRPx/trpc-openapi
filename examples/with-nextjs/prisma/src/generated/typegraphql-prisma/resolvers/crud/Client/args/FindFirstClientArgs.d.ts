import { ClientOrderByWithRelationInput } from "../../../inputs/ClientOrderByWithRelationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
export declare class FindFirstClientArgs {
    where?: ClientWhereInput | undefined;
    orderBy?: ClientOrderByWithRelationInput[] | undefined;
    cursor?: ClientWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "telephone_number" | "birthday" | "age" | "nick_name" | "image" | "gender" | "image2" | "image3" | "is_display" | "created_at"> | undefined;
}
