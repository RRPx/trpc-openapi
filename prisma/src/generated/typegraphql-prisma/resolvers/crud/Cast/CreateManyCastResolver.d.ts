import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCastArgs } from "./args/CreateManyCastArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCastResolver {
    createManyCast(ctx: any, info: GraphQLResolveInfo, args: CreateManyCastArgs): Promise<AffectedRowsOutput>;
}
