import { CastCreateOrConnectWithoutUserInput } from "../inputs/CastCreateOrConnectWithoutUserInput";
import { CastUncheckedCreateWithoutUserInput } from "../inputs/CastUncheckedCreateWithoutUserInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutUserInput {
    create?: CastUncheckedCreateWithoutUserInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutUserInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
