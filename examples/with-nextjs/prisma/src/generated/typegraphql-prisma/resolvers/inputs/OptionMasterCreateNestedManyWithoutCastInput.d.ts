import { OptionMasterCreateOrConnectWithoutCastInput } from "../inputs/OptionMasterCreateOrConnectWithoutCastInput";
import { OptionMasterCreateWithoutCastInput } from "../inputs/OptionMasterCreateWithoutCastInput";
import { OptionMasterWhereUniqueInput } from "../inputs/OptionMasterWhereUniqueInput";
export declare class OptionMasterCreateNestedManyWithoutCastInput {
    create?: OptionMasterCreateWithoutCastInput[] | undefined;
    connectOrCreate?: OptionMasterCreateOrConnectWithoutCastInput[] | undefined;
    connect?: OptionMasterWhereUniqueInput[] | undefined;
}
