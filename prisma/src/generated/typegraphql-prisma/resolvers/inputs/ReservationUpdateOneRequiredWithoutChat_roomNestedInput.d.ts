import { ReservationCreateOrConnectWithoutChat_roomInput } from "../inputs/ReservationCreateOrConnectWithoutChat_roomInput";
import { ReservationUncheckedCreateWithoutChat_roomInput } from "../inputs/ReservationUncheckedCreateWithoutChat_roomInput";
import { ReservationUncheckedUpdateWithoutChat_roomInput } from "../inputs/ReservationUncheckedUpdateWithoutChat_roomInput";
import { ReservationUpsertWithoutChat_roomInput } from "../inputs/ReservationUpsertWithoutChat_roomInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUpdateOneRequiredWithoutChat_roomNestedInput {
    create?: ReservationUncheckedCreateWithoutChat_roomInput | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutChat_roomInput | undefined;
    upsert?: ReservationUpsertWithoutChat_roomInput | undefined;
    connect?: ReservationWhereUniqueInput | undefined;
    update?: ReservationUncheckedUpdateWithoutChat_roomInput | undefined;
}
