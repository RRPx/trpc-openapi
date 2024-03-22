import { ReservationCreateManyCastInputEnvelope } from "../inputs/ReservationCreateManyCastInputEnvelope";
import { ReservationCreateOrConnectWithoutCastInput } from "../inputs/ReservationCreateOrConnectWithoutCastInput";
import { ReservationCreateWithoutCastInput } from "../inputs/ReservationCreateWithoutCastInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUncheckedCreateNestedManyWithoutCastInput {
    create?: ReservationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: ReservationCreateManyCastInputEnvelope | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
}
