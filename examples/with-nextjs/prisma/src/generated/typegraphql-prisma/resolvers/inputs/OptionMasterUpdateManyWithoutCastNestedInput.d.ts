import { OptionMasterCreateOrConnectWithoutCastInput } from "../inputs/OptionMasterCreateOrConnectWithoutCastInput";
import { OptionMasterCreateWithoutCastInput } from "../inputs/OptionMasterCreateWithoutCastInput";
import { OptionMasterScalarWhereInput } from "../inputs/OptionMasterScalarWhereInput";
import { OptionMasterUpdateManyWithWhereWithoutCastInput } from "../inputs/OptionMasterUpdateManyWithWhereWithoutCastInput";
import { OptionMasterUpdateWithWhereUniqueWithoutCastInput } from "../inputs/OptionMasterUpdateWithWhereUniqueWithoutCastInput";
import { OptionMasterUpsertWithWhereUniqueWithoutCastInput } from "../inputs/OptionMasterUpsertWithWhereUniqueWithoutCastInput";
import { OptionMasterWhereUniqueInput } from "../inputs/OptionMasterWhereUniqueInput";
export declare class OptionMasterUpdateManyWithoutCastNestedInput {
    create?: OptionMasterCreateWithoutCastInput[] | undefined;
    connectOrCreate?: OptionMasterCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: OptionMasterUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    set?: OptionMasterWhereUniqueInput[] | undefined;
    disconnect?: OptionMasterWhereUniqueInput[] | undefined;
    delete?: OptionMasterWhereUniqueInput[] | undefined;
    connect?: OptionMasterWhereUniqueInput[] | undefined;
    update?: OptionMasterUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: OptionMasterUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: OptionMasterScalarWhereInput[] | undefined;
}
