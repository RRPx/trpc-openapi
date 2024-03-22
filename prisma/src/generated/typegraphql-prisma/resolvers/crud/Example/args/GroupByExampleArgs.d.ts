import { ExampleOrderByWithAggregationInput } from "../../../inputs/ExampleOrderByWithAggregationInput";
import { ExampleScalarWhereWithAggregatesInput } from "../../../inputs/ExampleScalarWhereWithAggregatesInput";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";
export declare class GroupByExampleArgs {
    where?: ExampleWhereInput | undefined;
    orderBy?: ExampleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt">;
    having?: ExampleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
