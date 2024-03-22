import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCastArgs } from "./args/CreateOneCastArgs";
import { Cast } from "../../../models/Cast";
export declare class CreateOneCastResolver {
    createOneCast(ctx: any, info: GraphQLResolveInfo, args: CreateOneCastArgs): Promise<Cast>;
}
