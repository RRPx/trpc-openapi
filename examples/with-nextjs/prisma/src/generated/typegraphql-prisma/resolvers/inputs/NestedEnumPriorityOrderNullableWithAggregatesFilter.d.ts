import { NestedEnumPriorityOrderNullableFilter } from "../inputs/NestedEnumPriorityOrderNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumPriorityOrderNullableWithAggregatesFilter {
    equals?: "A" | "B" | "C" | "D" | "E" | undefined;
    in?: Array<"A" | "B" | "C" | "D" | "E"> | undefined;
    notIn?: Array<"A" | "B" | "C" | "D" | "E"> | undefined;
    not?: NestedEnumPriorityOrderNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumPriorityOrderNullableFilter | undefined;
    _max?: NestedEnumPriorityOrderNullableFilter | undefined;
}
