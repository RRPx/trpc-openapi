import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCastInformationOrThrowArgs } from "./args/FindFirstCastInformationOrThrowArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class FindFirstCastInformationOrThrowResolver {
    findFirstCastInformationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCastInformationOrThrowArgs): Promise<CastInformation | null>;
}
