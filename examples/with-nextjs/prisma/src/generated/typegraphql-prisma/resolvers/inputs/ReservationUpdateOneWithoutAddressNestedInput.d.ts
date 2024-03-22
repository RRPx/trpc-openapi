import { ReservationCreateOrConnectWithoutAddressInput } from "../inputs/ReservationCreateOrConnectWithoutAddressInput";
import { ReservationUncheckedCreateWithoutAddressInput } from "../inputs/ReservationUncheckedCreateWithoutAddressInput";
import { ReservationUncheckedUpdateWithoutAddressInput } from "../inputs/ReservationUncheckedUpdateWithoutAddressInput";
import { ReservationUpsertWithoutAddressInput } from "../inputs/ReservationUpsertWithoutAddressInput";
import { ReservationWhereInput } from "../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUpdateOneWithoutAddressNestedInput {
    create?: ReservationUncheckedCreateWithoutAddressInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutAddressInput | undefined;
    upsert?: ReservationUpsertWithoutAddressInput | undefined;
    disconnect?: ReservationWhereInput | undefined;
    delete?: ReservationWhereInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
    update?: ReservationUncheckedUpdateWithoutAddressInput | undefined;
}
