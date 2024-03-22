import { ClientUncheckedCreateWithoutReviewInput } from "../inputs/ClientUncheckedCreateWithoutReviewInput";
import { ClientUncheckedUpdateWithoutReviewInput } from "../inputs/ClientUncheckedUpdateWithoutReviewInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutReviewInput {
    update: ClientUncheckedUpdateWithoutReviewInput;
    create: ClientUncheckedCreateWithoutReviewInput;
    where?: ClientWhereInput | undefined;
}
