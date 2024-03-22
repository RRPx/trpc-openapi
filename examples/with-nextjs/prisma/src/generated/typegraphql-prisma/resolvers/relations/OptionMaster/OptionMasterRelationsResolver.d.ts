import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { OptionMaster } from "../../../models/OptionMaster";
import { Reservation } from "../../../models/Reservation";
import { OptionMasterCastArgs } from "./args/OptionMasterCastArgs";
import { OptionMasterReservationArgs } from "./args/OptionMasterReservationArgs";
export declare class OptionMasterRelationsResolver {
    cast(optionMaster: OptionMaster, ctx: any, info: GraphQLResolveInfo, args: OptionMasterCastArgs): Promise<Cast[]>;
    reservation(optionMaster: OptionMaster, ctx: any, info: GraphQLResolveInfo, args: OptionMasterReservationArgs): Promise<Reservation[]>;
}
