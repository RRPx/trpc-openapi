import { ReservationCreateOrConnectWithoutShift_idInput } from "../inputs/ReservationCreateOrConnectWithoutShift_idInput";
import { ReservationUncheckedCreateWithoutShift_idInput } from "../inputs/ReservationUncheckedCreateWithoutShift_idInput";
import { ReservationUncheckedUpdateWithoutShift_idInput } from "../inputs/ReservationUncheckedUpdateWithoutShift_idInput";
import { ReservationUpsertWithoutShift_idInput } from "../inputs/ReservationUpsertWithoutShift_idInput";
import { ReservationWhereInput } from "../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUpdateOneWithoutShift_idNestedInput {
    create?: ReservationUncheckedCreateWithoutShift_idInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutShift_idInput | undefined;
    upsert?: ReservationUpsertWithoutShift_idInput | undefined;
    disconnect?: ReservationWhereInput | undefined;
    delete?: ReservationWhereInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
    update?: ReservationUncheckedUpdateWithoutShift_idInput | undefined;
}
