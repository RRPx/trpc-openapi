import { CastCreateOrConnectWithoutShift_managementInput } from "../inputs/CastCreateOrConnectWithoutShift_managementInput";
import { CastUncheckedCreateWithoutShift_managementInput } from "../inputs/CastUncheckedCreateWithoutShift_managementInput";
import { CastUncheckedUpdateWithoutShift_managementInput } from "../inputs/CastUncheckedUpdateWithoutShift_managementInput";
import { CastUpsertWithoutShift_managementInput } from "../inputs/CastUpsertWithoutShift_managementInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneRequiredWithoutShift_managementNestedInput {
    create?: CastUncheckedCreateWithoutShift_managementInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutShift_managementInput | undefined;
    upsert?: CastUpsertWithoutShift_managementInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutShift_managementInput | undefined;
}
