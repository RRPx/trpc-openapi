import { ReviewCreateManyCastInputEnvelope } from "../inputs/ReviewCreateManyCastInputEnvelope";
import { ReviewCreateOrConnectWithoutCastInput } from "../inputs/ReviewCreateOrConnectWithoutCastInput";
import { ReviewCreateWithoutCastInput } from "../inputs/ReviewCreateWithoutCastInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutCastInput } from "../inputs/ReviewUpdateManyWithWhereWithoutCastInput";
import { ReviewUpdateWithWhereUniqueWithoutCastInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutCastInput";
import { ReviewUpsertWithWhereUniqueWithoutCastInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutCastInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewUpdateManyWithoutCastNestedInput {
    create?: ReviewCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: ReviewUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: ReviewCreateManyCastInputEnvelope | undefined;
    set?: ReviewWhereUniqueInput[] | undefined;
    disconnect?: ReviewWhereUniqueInput[] | undefined;
    delete?: ReviewWhereUniqueInput[] | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
    update?: ReviewUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: ReviewUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: ReviewScalarWhereInput[] | undefined;
}
