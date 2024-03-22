import { CastCreateOrConnectWithoutShift_managementInput } from "../inputs/CastCreateOrConnectWithoutShift_managementInput";
import { CastUncheckedCreateWithoutShift_managementInput } from "../inputs/CastUncheckedCreateWithoutShift_managementInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutShift_managementInput {
    create?: CastUncheckedCreateWithoutShift_managementInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutShift_managementInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
