import { ReservationCreateManyClientInputEnvelope } from "../inputs/ReservationCreateManyClientInputEnvelope";
import { ReservationCreateOrConnectWithoutClientInput } from "../inputs/ReservationCreateOrConnectWithoutClientInput";
import { ReservationCreateWithoutClientInput } from "../inputs/ReservationCreateWithoutClientInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutClientInput } from "../inputs/ReservationUpdateManyWithWhereWithoutClientInput";
import { ReservationUpdateWithWhereUniqueWithoutClientInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutClientInput";
import { ReservationUpsertWithWhereUniqueWithoutClientInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutClientInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUncheckedUpdateManyWithoutClientNestedInput {
    create?: ReservationCreateWithoutClientInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: ReservationUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: ReservationCreateManyClientInputEnvelope | undefined;
    set?: ReservationWhereUniqueInput[] | undefined;
    disconnect?: ReservationWhereUniqueInput[] | undefined;
    delete?: ReservationWhereUniqueInput[] | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
    update?: ReservationUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: ReservationUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: ReservationScalarWhereInput[] | undefined;
}
