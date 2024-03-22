import { FavoriteUncheckedCreateNestedManyWithoutClientInput } from "../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput";
import { NotificationUncheckedCreateNestedManyWithoutClientInput } from "../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput";
import { ReservationUncheckedCreateNestedManyWithoutClientInput } from "../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput";
import { UserUncheckedCreateNestedOneWithoutClientInput } from "../inputs/UserUncheckedCreateNestedOneWithoutClientInput";
export declare class ClientUncheckedCreateWithoutReviewInput {
    id?: string | undefined;
    telephone_number?: string | undefined;
    birthday?: Date | undefined;
    age?: string | undefined;
    nick_name?: string | undefined;
    image?: string | undefined;
    gender?: "male" | "female" | undefined;
    image2?: string | undefined;
    image3?: string | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    users?: UserUncheckedCreateNestedOneWithoutClientInput | undefined;
    favorite?: FavoriteUncheckedCreateNestedManyWithoutClientInput | undefined;
    reservation?: ReservationUncheckedCreateNestedManyWithoutClientInput | undefined;
    notification?: NotificationUncheckedCreateNestedManyWithoutClientInput | undefined;
}
