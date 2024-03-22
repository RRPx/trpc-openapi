import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCastInformationArgs } from "./args/FindUniqueCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class FindUniqueCastInformationResolver {
    castInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCastInformationArgs): Promise<CastInformation | null>;
}
