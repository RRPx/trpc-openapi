import type { GraphQLResolveInfo } from "graphql";
import { GroupByExampleArgs } from "./args/GroupByExampleArgs";
import { ExampleGroupBy } from "../../outputs/ExampleGroupBy";
export declare class GroupByExampleResolver {
    groupByExample(ctx: any, info: GraphQLResolveInfo, args: GroupByExampleArgs): Promise<ExampleGroupBy[]>;
}
