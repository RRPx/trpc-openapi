import { CastCreateOrConnectWithoutBank_informationInput } from "../inputs/CastCreateOrConnectWithoutBank_informationInput";
import { CastUncheckedCreateWithoutBank_informationInput } from "../inputs/CastUncheckedCreateWithoutBank_informationInput";
import { CastUncheckedUpdateWithoutBank_informationInput } from "../inputs/CastUncheckedUpdateWithoutBank_informationInput";
import { CastUpsertWithoutBank_informationInput } from "../inputs/CastUpsertWithoutBank_informationInput";
import { CastWhereInput } from "../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneWithoutBank_informationNestedInput {
    create?: CastUncheckedCreateWithoutBank_informationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutBank_informationInput | undefined;
    upsert?: CastUpsertWithoutBank_informationInput | undefined;
    disconnect?: CastWhereInput | undefined;
    delete?: CastWhereInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutBank_informationInput | undefined;
}
