import { ReservationCreateOrConnectWithoutOption_idInput } from "../inputs/ReservationCreateOrConnectWithoutOption_idInput";
import { ReservationCreateWithoutOption_idInput } from "../inputs/ReservationCreateWithoutOption_idInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutOption_idInput } from "../inputs/ReservationUpdateManyWithWhereWithoutOption_idInput";
import { ReservationUpdateWithWhereUniqueWithoutOption_idInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutOption_idInput";
import { ReservationUpsertWithWhereUniqueWithoutOption_idInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutOption_idInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationUpdateManyWithoutOption_idNestedInput {
    create?: ReservationCreateWithoutOption_idInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutOption_idInput[] | undefined;
    upsert?: ReservationUpsertWithWhereUniqueWithoutOption_idInput[] | undefined;
    set?: ReservationWhereUniqueInput[] | undefined;
    disconnect?: ReservationWhereUniqueInput[] | undefined;
    delete?: ReservationWhereUniqueInput[] | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
    update?: ReservationUpdateWithWhereUniqueWithoutOption_idInput[] | undefined;
    updateMany?: ReservationUpdateManyWithWhereWithoutOption_idInput[] | undefined;
    deleteMany?: ReservationScalarWhereInput[] | undefined;
}
