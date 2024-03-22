import { AddressUncheckedCreateInput } from "../../../inputs/AddressUncheckedCreateInput";
import { AddressUncheckedUpdateInput } from "../../../inputs/AddressUncheckedUpdateInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class UpsertOneAddressArgs {
    where: AddressWhereUniqueInput;
    create: AddressUncheckedCreateInput;
    update: AddressUncheckedUpdateInput;
}
