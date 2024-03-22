import type { GraphQLResolveInfo } from "graphql";
import { AggregateExampleArgs } from "./args/AggregateExampleArgs";
import { AggregateExample } from "../../outputs/AggregateExample";
export declare class AggregateExampleResolver {
    aggregateExample(ctx: any, info: GraphQLResolveInfo, args: AggregateExampleArgs): Promise<AggregateExample>;
}
