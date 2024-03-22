import { CastCreateOrConnectWithoutReviewInput } from "../inputs/CastCreateOrConnectWithoutReviewInput";
import { CastUncheckedCreateWithoutReviewInput } from "../inputs/CastUncheckedCreateWithoutReviewInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutReviewInput {
    create?: CastUncheckedCreateWithoutReviewInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutReviewInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
