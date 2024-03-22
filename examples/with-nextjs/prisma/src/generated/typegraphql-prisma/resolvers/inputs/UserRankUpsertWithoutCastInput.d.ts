import { UserRankUncheckedCreateWithoutCastInput } from "../inputs/UserRankUncheckedCreateWithoutCastInput";
import { UserRankUncheckedUpdateWithoutCastInput } from "../inputs/UserRankUncheckedUpdateWithoutCastInput";
import { UserRankWhereInput } from "../inputs/UserRankWhereInput";
export declare class UserRankUpsertWithoutCastInput {
    update: UserRankUncheckedUpdateWithoutCastInput;
    create: UserRankUncheckedCreateWithoutCastInput;
    where?: UserRankWhereInput | undefined;
}
