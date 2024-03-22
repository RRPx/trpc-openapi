import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCastInformationArgs } from "./args/FindFirstCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class FindFirstCastInformationResolver {
    findFirstCastInformation(ctx: any, info: GraphQLResolveInfo, args: FindFirstCastInformationArgs): Promise<CastInformation | null>;
}
