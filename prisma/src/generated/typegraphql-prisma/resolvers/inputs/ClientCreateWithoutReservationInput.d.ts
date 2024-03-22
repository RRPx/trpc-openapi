import { FavoriteCreateNestedManyWithoutClientInput } from "../inputs/FavoriteCreateNestedManyWithoutClientInput";
import { NotificationCreateNestedManyWithoutClientInput } from "../inputs/NotificationCreateNestedManyWithoutClientInput";
import { ReviewCreateNestedManyWithoutClientInput } from "../inputs/ReviewCreateNestedManyWithoutClientInput";
import { UserCreateNestedOneWithoutClientInput } from "../inputs/UserCreateNestedOneWithoutClientInput";
export declare class ClientCreateWithoutReservationInput {
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
    users?: UserCreateNestedOneWithoutClientInput | undefined;
    favorite?: FavoriteCreateNestedManyWithoutClientInput | undefined;
    review?: ReviewCreateNestedManyWithoutClientInput | undefined;
    notification?: NotificationCreateNestedManyWithoutClientInput | undefined;
}
