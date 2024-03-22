import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { CastInformation } from "../../../models/CastInformation";
export declare class CastInformationRelationsResolver {
    cast(castInformation: CastInformation, ctx: any, info: GraphQLResolveInfo): Promise<Cast>;
}
