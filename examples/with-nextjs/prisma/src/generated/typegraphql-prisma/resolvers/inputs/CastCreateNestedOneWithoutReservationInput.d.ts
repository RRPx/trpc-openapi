import { CastCreateOrConnectWithoutReservationInput } from "../inputs/CastCreateOrConnectWithoutReservationInput";
import { CastUncheckedCreateWithoutReservationInput } from "../inputs/CastUncheckedCreateWithoutReservationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutReservationInput {
    create?: CastUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutReservationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
