import type { GraphQLResolveInfo } from "graphql";
import { FindManyCastInformationArgs } from "./args/FindManyCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class FindManyCastInformationResolver {
    castInformations(ctx: any, info: GraphQLResolveInfo, args: FindManyCastInformationArgs): Promise<CastInformation[]>;
}
