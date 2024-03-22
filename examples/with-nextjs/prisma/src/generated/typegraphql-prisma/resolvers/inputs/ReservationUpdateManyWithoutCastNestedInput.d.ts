import { ReservationCreateManyCastInputEnvelope } from "../inputs/ReservationCreateManyCastInputEnvelope";
import { ReservationCreateOrConnectWithoutCastInput } from "../inputs/ReservationCreateOrConnectWithoutCastInput";
import { ReservationCreateWithoutCastInput } from "../inputs/ReservationCreateWithoutCastInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutCastInput } from "../inputs/ReservationUpdateManyWithWhereWithoutCastInput";
import { ReservationUpdateWithWhereUniqueWithoutCastInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutCastInput";
import { ReservationUpsertWithWhereUniqueWithoutCastInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutCastInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUpdateManyWithoutCastNestedInput {
    create?: ReservationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: ReservationUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: ReservationCreateManyCastInputEnvelope | undefined;
    set?: ReservationWhereUniqueInput[] | undefined;
    disconnect?: ReservationWhereUniqueInput[] | undefined;
    delete?: ReservationWhereUniqueInput[] | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
    update?: ReservationUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: ReservationUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: ReservationScalarWhereInput[] | undefined;
}
