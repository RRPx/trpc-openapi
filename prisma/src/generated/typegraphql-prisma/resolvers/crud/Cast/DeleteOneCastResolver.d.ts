import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCastArgs } from "./args/DeleteOneCastArgs";
import { Cast } from "../../../models/Cast";
export declare class DeleteOneCastResolver {
    deleteOneCast(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCastArgs): Promise<Cast | null>;
}
