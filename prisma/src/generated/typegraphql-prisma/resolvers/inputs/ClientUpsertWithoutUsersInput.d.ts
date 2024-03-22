import { ClientUncheckedCreateWithoutUsersInput } from "../inputs/ClientUncheckedCreateWithoutUsersInput";
import { ClientUncheckedUpdateWithoutUsersInput } from "../inputs/ClientUncheckedUpdateWithoutUsersInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutUsersInput {
    update: ClientUncheckedUpdateWithoutUsersInput;
    create: ClientUncheckedCreateWithoutUsersInput;
    where?: ClientWhereInput | undefined;
}
