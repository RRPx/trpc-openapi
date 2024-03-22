import { CastCreateOrConnectWithoutReservationInput } from "../inputs/CastCreateOrConnectWithoutReservationInput";
import { CastUncheckedCreateWithoutReservationInput } from "../inputs/CastUncheckedCreateWithoutReservationInput";
import { CastUncheckedUpdateWithoutReservationInput } from "../inputs/CastUncheckedUpdateWithoutReservationInput";
import { CastUpsertWithoutReservationInput } from "../inputs/CastUpsertWithoutReservationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneRequiredWithoutReservationNestedInput {
    create?: CastUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutReservationInput | undefined;
    upsert?: CastUpsertWithoutReservationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutReservationInput | undefined;
}
