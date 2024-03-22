import { FavoriteCreateNestedManyWithoutClientInput } from "../inputs/FavoriteCreateNestedManyWithoutClientInput";
import { NotificationCreateNestedManyWithoutClientInput } from "../inputs/NotificationCreateNestedManyWithoutClientInput";
import { ReservationCreateNestedManyWithoutClientInput } from "../inputs/ReservationCreateNestedManyWithoutClientInput";
import { ReviewCreateNestedManyWithoutClientInput } from "../inputs/ReviewCreateNestedManyWithoutClientInput";
export declare class ClientCreateWithoutUsersInput {
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
    favorite?: FavoriteCreateNestedManyWithoutClientInput | undefined;
    reservation?: ReservationCreateNestedManyWithoutClientInput | undefined;
    review?: ReviewCreateNestedManyWithoutClientInput | undefined;
    notification?: NotificationCreateNestedManyWithoutClientInput | undefined;
}
