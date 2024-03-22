import { ReviewCreateManyClientInputEnvelope } from "../inputs/ReviewCreateManyClientInputEnvelope";
import { ReviewCreateOrConnectWithoutClientInput } from "../inputs/ReviewCreateOrConnectWithoutClientInput";
import { ReviewCreateWithoutClientInput } from "../inputs/ReviewCreateWithoutClientInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewCreateNestedManyWithoutClientInput {
    create?: ReviewCreateWithoutClientInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: ReviewCreateManyClientInputEnvelope | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
}
