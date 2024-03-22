import type { GraphQLResolveInfo } from "graphql";
import { GroupByCastInformationArgs } from "./args/GroupByCastInformationArgs";
import { CastInformationGroupBy } from "../../outputs/CastInformationGroupBy";
export declare class GroupByCastInformationResolver {
    groupByCastInformation(ctx: any, info: GraphQLResolveInfo, args: GroupByCastInformationArgs): Promise<CastInformationGroupBy[]>;
}
