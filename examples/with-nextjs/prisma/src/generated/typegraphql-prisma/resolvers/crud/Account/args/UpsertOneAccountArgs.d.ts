import { AccountUncheckedCreateInput } from "../../../inputs/AccountUncheckedCreateInput";
import { AccountUncheckedUpdateInput } from "../../../inputs/AccountUncheckedUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class UpsertOneAccountArgs {
    where: AccountWhereUniqueInput;
    create: AccountUncheckedCreateInput;
    update: AccountUncheckedUpdateInput;
}
