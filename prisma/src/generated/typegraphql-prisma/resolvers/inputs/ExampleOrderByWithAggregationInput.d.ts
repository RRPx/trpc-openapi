import { ExampleAvgOrderByAggregateInput } from "../inputs/ExampleAvgOrderByAggregateInput";
import { ExampleCountOrderByAggregateInput } from "../inputs/ExampleCountOrderByAggregateInput";
import { ExampleMaxOrderByAggregateInput } from "../inputs/ExampleMaxOrderByAggregateInput";
import { ExampleMinOrderByAggregateInput } from "../inputs/ExampleMinOrderByAggregateInput";
import { ExampleSumOrderByAggregateInput } from "../inputs/ExampleSumOrderByAggregateInput";
export declare class ExampleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ExampleCountOrderByAggregateInput | undefined;
    _avg?: ExampleAvgOrderByAggregateInput | undefined;
    _max?: ExampleMaxOrderByAggregateInput | undefined;
    _min?: ExampleMinOrderByAggregateInput | undefined;
    _sum?: ExampleSumOrderByAggregateInput | undefined;
}
