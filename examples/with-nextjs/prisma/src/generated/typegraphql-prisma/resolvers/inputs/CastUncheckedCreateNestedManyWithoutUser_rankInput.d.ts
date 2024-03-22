import { CastCreateManyUser_rankInputEnvelope } from "../inputs/CastCreateManyUser_rankInputEnvelope";
import { CastCreateOrConnectWithoutUser_rankInput } from "../inputs/CastCreateOrConnectWithoutUser_rankInput";
import { CastCreateWithoutUser_rankInput } from "../inputs/CastCreateWithoutUser_rankInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUncheckedCreateNestedManyWithoutUser_rankInput {
    create?: CastCreateWithoutUser_rankInput[] | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutUser_rankInput[] | undefined;
    createMany?: CastCreateManyUser_rankInputEnvelope | undefined;
    connect?: CastWhereUniqueInput[] | undefined;
}
