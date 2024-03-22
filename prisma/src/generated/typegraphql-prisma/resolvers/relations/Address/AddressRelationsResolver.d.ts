import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Reservation } from "../../../models/Reservation";
import { AddressReservationArgs } from "./args/AddressReservationArgs";
export declare class AddressRelationsResolver {
    reservation(address: Address, ctx: any, info: GraphQLResolveInfo, args: AddressReservationArgs): Promise<Reservation | null>;
}
