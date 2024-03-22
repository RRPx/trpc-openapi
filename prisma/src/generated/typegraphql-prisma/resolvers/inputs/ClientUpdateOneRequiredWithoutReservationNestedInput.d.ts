import { ClientCreateOrConnectWithoutReservationInput } from "../inputs/ClientCreateOrConnectWithoutReservationInput";
import { ClientUncheckedCreateWithoutReservationInput } from "../inputs/ClientUncheckedCreateWithoutReservationInput";
import { ClientUncheckedUpdateWithoutReservationInput } from "../inputs/ClientUncheckedUpdateWithoutReservationInput";
import { ClientUpsertWithoutReservationInput } from "../inputs/ClientUpsertWithoutReservationInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutReservationNestedInput {
    create?: ClientUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutReservationInput | undefined;
    upsert?: ClientUpsertWithoutReservationInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUncheckedUpdateWithoutReservationInput | undefined;
}
