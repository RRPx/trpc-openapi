import { ClientUncheckedCreateInput } from "../../../inputs/ClientUncheckedCreateInput";
import { ClientUncheckedUpdateInput } from "../../../inputs/ClientUncheckedUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
export declare class UpsertOneClientArgs {
    where: ClientWhereUniqueInput;
    create: ClientUncheckedCreateInput;
    update: ClientUncheckedUpdateInput;
}
