import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCastInformationArgs } from "./args/UpdateOneCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class UpdateOneCastInformationResolver {
    updateOneCastInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCastInformationArgs): Promise<CastInformation | null>;
}
