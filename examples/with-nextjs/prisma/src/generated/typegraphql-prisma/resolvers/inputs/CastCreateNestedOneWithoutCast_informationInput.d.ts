import { CastCreateOrConnectWithoutCast_informationInput } from "../inputs/CastCreateOrConnectWithoutCast_informationInput";
import { CastUncheckedCreateWithoutCast_informationInput } from "../inputs/CastUncheckedCreateWithoutCast_informationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutCast_informationInput {
    create?: CastUncheckedCreateWithoutCast_informationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutCast_informationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
