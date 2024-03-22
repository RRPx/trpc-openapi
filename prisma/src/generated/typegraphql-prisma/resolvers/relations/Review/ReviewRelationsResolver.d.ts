import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { Client } from "../../../models/Client";
import { Review } from "../../../models/Review";
export declare class ReviewRelationsResolver {
    cast(review: Review, ctx: any, info: GraphQLResolveInfo): Promise<Cast>;
    client(review: Review, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
}
