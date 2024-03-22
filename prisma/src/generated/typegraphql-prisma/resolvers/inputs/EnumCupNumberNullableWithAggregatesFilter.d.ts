import { NestedEnumCupNumberNullableFilter } from "../inputs/NestedEnumCupNumberNullableFilter";
import { NestedEnumCupNumberNullableWithAggregatesFilter } from "../inputs/NestedEnumCupNumberNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumCupNumberNullableWithAggregatesFilter {
    equals?: "ACUP" | "BCUP" | "CCUP" | "DCUP" | "ECUP" | "FCUP" | "GCUP" | "HCUP" | "OTHER" | "SECRET" | undefined;
    in?: Array<"ACUP" | "BCUP" | "CCUP" | "DCUP" | "ECUP" | "FCUP" | "GCUP" | "HCUP" | "OTHER" | "SECRET"> | undefined;
    notIn?: Array<"ACUP" | "BCUP" | "CCUP" | "DCUP" | "ECUP" | "FCUP" | "GCUP" | "HCUP" | "OTHER" | "SECRET"> | undefined;
    not?: NestedEnumCupNumberNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumCupNumberNullableFilter | undefined;
    _max?: NestedEnumCupNumberNullableFilter | undefined;
}
