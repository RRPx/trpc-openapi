import type { GraphQLResolveInfo } from "graphql";
import { GroupByCastArgs } from "./args/GroupByCastArgs";
import { CastGroupBy } from "../../outputs/CastGroupBy";
export declare class GroupByCastResolver {
    groupByCast(ctx: any, info: GraphQLResolveInfo, args: GroupByCastArgs): Promise<CastGroupBy[]>;
}
