import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCastArgs } from "./args/DeleteManyCastArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCastResolver {
    deleteManyCast(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCastArgs): Promise<AffectedRowsOutput>;
}
