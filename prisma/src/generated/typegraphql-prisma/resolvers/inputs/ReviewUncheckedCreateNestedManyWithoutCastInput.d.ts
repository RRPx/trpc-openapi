import { ReviewCreateManyCastInputEnvelope } from "../inputs/ReviewCreateManyCastInputEnvelope";
import { ReviewCreateOrConnectWithoutCastInput } from "../inputs/ReviewCreateOrConnectWithoutCastInput";
import { ReviewCreateWithoutCastInput } from "../inputs/ReviewCreateWithoutCastInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewUncheckedCreateNestedManyWithoutCastInput {
    create?: ReviewCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: ReviewCreateManyCastInputEnvelope | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
}
