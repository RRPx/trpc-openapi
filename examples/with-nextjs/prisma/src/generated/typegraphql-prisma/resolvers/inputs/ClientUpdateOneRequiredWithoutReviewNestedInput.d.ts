import { ClientCreateOrConnectWithoutReviewInput } from "../inputs/ClientCreateOrConnectWithoutReviewInput";
import { ClientUncheckedCreateWithoutReviewInput } from "../inputs/ClientUncheckedCreateWithoutReviewInput";
import { ClientUncheckedUpdateWithoutReviewInput } from "../inputs/ClientUncheckedUpdateWithoutReviewInput";
import { ClientUpsertWithoutReviewInput } from "../inputs/ClientUpsertWithoutReviewInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutReviewNestedInput {
    create?: ClientUncheckedCreateWithoutReviewInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutReviewInput | undefined;
    upsert?: ClientUpsertWithoutReviewInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUncheckedUpdateWithoutReviewInput | undefined;
}
