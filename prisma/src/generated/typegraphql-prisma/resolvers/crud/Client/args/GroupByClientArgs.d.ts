import { ClientOrderByWithAggregationInput } from "../../../inputs/ClientOrderByWithAggregationInput";
import { ClientScalarWhereWithAggregatesInput } from "../../../inputs/ClientScalarWhereWithAggregatesInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
export declare class GroupByClientArgs {
    where?: ClientWhereInput | undefined;
    orderBy?: ClientOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "telephone_number" | "birthday" | "age" | "nick_name" | "image" | "gender" | "image2" | "image3" | "is_display" | "created_at">;
    having?: ClientScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
