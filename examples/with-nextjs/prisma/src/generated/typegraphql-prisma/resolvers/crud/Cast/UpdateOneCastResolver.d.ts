import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCastArgs } from "./args/UpdateOneCastArgs";
import { Cast } from "../../../models/Cast";
export declare class UpdateOneCastResolver {
    updateOneCast(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCastArgs): Promise<Cast | null>;
}
