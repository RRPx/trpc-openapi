import { CastCreateOrConnectWithoutBank_informationInput } from "../inputs/CastCreateOrConnectWithoutBank_informationInput";
import { CastUncheckedCreateWithoutBank_informationInput } from "../inputs/CastUncheckedCreateWithoutBank_informationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutBank_informationInput {
    create?: CastUncheckedCreateWithoutBank_informationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutBank_informationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
