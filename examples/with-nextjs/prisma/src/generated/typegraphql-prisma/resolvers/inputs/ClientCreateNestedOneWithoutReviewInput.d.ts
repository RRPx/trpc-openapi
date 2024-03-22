import { ClientCreateOrConnectWithoutReviewInput } from "../inputs/ClientCreateOrConnectWithoutReviewInput";
import { ClientUncheckedCreateWithoutReviewInput } from "../inputs/ClientUncheckedCreateWithoutReviewInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutReviewInput {
    create?: ClientUncheckedCreateWithoutReviewInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutReviewInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
