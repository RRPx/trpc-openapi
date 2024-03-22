import { Favorite } from "../models/Favorite";
import { Notification } from "../models/Notification";
import { Reservation } from "../models/Reservation";
import { Review } from "../models/Review";
import { User } from "../models/User";
import { ClientCount } from "../resolvers/outputs/ClientCount";
export declare class Client {
    id: string;
    telephone_number?: string | null;
    birthday?: Date | null;
    age?: string | null;
    nick_name?: string | null;
    image?: string | null;
    gender?: "male" | "female" | null;
    image2?: string | null;
    image3?: string | null;
    users?: User | null;
    favorite?: Favorite[];
    reservation?: Reservation[];
    review?: Review[];
    notification?: Notification[];
    is_display: boolean;
    created_at: Date;
    _count?: ClientCount | null;
}
