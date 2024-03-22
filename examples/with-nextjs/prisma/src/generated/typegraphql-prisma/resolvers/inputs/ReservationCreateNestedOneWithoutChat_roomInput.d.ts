import { ReservationCreateOrConnectWithoutChat_roomInput } from "../inputs/ReservationCreateOrConnectWithoutChat_roomInput";
import { ReservationUncheckedCreateWithoutChat_roomInput } from "../inputs/ReservationUncheckedCreateWithoutChat_roomInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationCreateNestedOneWithoutChat_roomInput {
    create?: ReservationUncheckedCreateWithoutChat_roomInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutChat_roomInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
}
