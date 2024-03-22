import { CastCreateOrConnectWithoutReviewInput } from "../inputs/CastCreateOrConnectWithoutReviewInput";
import { CastUncheckedCreateWithoutReviewInput } from "../inputs/CastUncheckedCreateWithoutReviewInput";
import { CastUncheckedUpdateWithoutReviewInput } from "../inputs/CastUncheckedUpdateWithoutReviewInput";
import { CastUpsertWithoutReviewInput } from "../inputs/CastUpsertWithoutReviewInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneRequiredWithoutReviewNestedInput {
    create?: CastUncheckedCreateWithoutReviewInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutReviewInput | undefined;
    upsert?: CastUpsertWithoutReviewInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutReviewInput | undefined;
}
