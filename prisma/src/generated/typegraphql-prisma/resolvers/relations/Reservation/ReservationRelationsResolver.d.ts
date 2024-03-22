import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Cast } from "../../../models/Cast";
import { ChatRoom } from "../../../models/ChatRoom";
import { Client } from "../../../models/Client";
import { OptionMaster } from "../../../models/OptionMaster";
import { Reservation } from "../../../models/Reservation";
import { ShiftManagement } from "../../../models/ShiftManagement";
import { ReservationChat_roomArgs } from "./args/ReservationChat_roomArgs";
import { ReservationOption_idArgs } from "./args/ReservationOption_idArgs";
import { ReservationShift_idArgs } from "./args/ReservationShift_idArgs";
export declare class ReservationRelationsResolver {
    cast(reservation: Reservation, ctx: any, info: GraphQLResolveInfo): Promise<Cast>;
    client(reservation: Reservation, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
    option_id(reservation: Reservation, ctx: any, info: GraphQLResolveInfo, args: ReservationOption_idArgs): Promise<OptionMaster[]>;
    shift_id(reservation: Reservation, ctx: any, info: GraphQLResolveInfo, args: ReservationShift_idArgs): Promise<ShiftManagement[]>;
    chat_room(reservation: Reservation, ctx: any, info: GraphQLResolveInfo, args: ReservationChat_roomArgs): Promise<ChatRoom | null>;
    address(reservation: Reservation, ctx: any, info: GraphQLResolveInfo): Promise<Address>;
}
