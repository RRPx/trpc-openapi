import { ReservationCreateOrConnectWithoutAddressInput } from "../inputs/ReservationCreateOrConnectWithoutAddressInput";
import { ReservationUncheckedCreateWithoutAddressInput } from "../inputs/ReservationUncheckedCreateWithoutAddressInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUncheckedCreateNestedOneWithoutAddressInput {
    create?: ReservationUncheckedCreateWithoutAddressInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutAddressInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
}
