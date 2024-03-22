import { ReviewCreateManyClientInputEnvelope } from "../inputs/ReviewCreateManyClientInputEnvelope";
import { ReviewCreateOrConnectWithoutClientInput } from "../inputs/ReviewCreateOrConnectWithoutClientInput";
import { ReviewCreateWithoutClientInput } from "../inputs/ReviewCreateWithoutClientInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutClientInput } from "../inputs/ReviewUpdateManyWithWhereWithoutClientInput";
import { ReviewUpdateWithWhereUniqueWithoutClientInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutClientInput";
import { ReviewUpsertWithWhereUniqueWithoutClientInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutClientInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewUpdateManyWithoutClientNestedInput {
    create?: ReviewCreateWithoutClientInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: ReviewCreateManyClientInputEnvelope | undefined;
    set?: ReviewWhereUniqueInput[] | undefined;
    disconnect?: ReviewWhereUniqueInput[] | undefined;
    delete?: ReviewWhereUniqueInput[] | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: ReviewScalarWhereInput[] | undefined;
}
