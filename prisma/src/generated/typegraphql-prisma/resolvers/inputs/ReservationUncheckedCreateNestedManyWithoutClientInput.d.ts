import { ReservationCreateManyClientInputEnvelope } from "../inputs/ReservationCreateManyClientInputEnvelope";
import { ReservationCreateOrConnectWithoutClientInput } from "../inputs/ReservationCreateOrConnectWithoutClientInput";
import { ReservationCreateWithoutClientInput } from "../inputs/ReservationCreateWithoutClientInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUncheckedCreateNestedManyWithoutClientInput {
    create?: ReservationCreateWithoutClientInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: ReservationCreateManyClientInputEnvelope | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
}
