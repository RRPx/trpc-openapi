import { ReservationCreateOrConnectWithoutOption_idInput } from "../inputs/ReservationCreateOrConnectWithoutOption_idInput";
import { ReservationCreateWithoutOption_idInput } from "../inputs/ReservationCreateWithoutOption_idInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";
export declare class ReservationCreateNestedManyWithoutOption_idInput {
    create?: ReservationCreateWithoutOption_idInput[] | undefined;
    connectOrCreate?: ReservationCreateOrConnectWithoutOption_idInput[] | undefined;
    connect?: ReservationWhereUniqueInput[] | undefined;
}
