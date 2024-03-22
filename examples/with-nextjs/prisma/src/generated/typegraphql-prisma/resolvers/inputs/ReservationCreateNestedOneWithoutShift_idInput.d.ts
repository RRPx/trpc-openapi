import { ReservationCreateOrConnectWithoutShift_idInput } from "../inputs/ReservationCreateOrConnectWithoutShift_idInput";
import { ReservationUncheckedCreateWithoutShift_idInput } from "../inputs/ReservationUncheckedCreateWithoutShift_idInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationCreateNestedOneWithoutShift_idInput {
    create?: ReservationUncheckedCreateWithoutShift_idInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutShift_idInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
}
