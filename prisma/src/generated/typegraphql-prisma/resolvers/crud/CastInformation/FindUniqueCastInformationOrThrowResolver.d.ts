import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCastInformationOrThrowArgs } from "./args/FindUniqueCastInformationOrThrowArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class FindUniqueCastInformationOrThrowResolver {
    getCastInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCastInformationOrThrowArgs): Promise<CastInformation | null>;
}
