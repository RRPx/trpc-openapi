import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCastInformationArgs } from "./args/UpsertOneCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class UpsertOneCastInformationResolver {
    upsertOneCastInformation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCastInformationArgs): Promise<CastInformation>;
}
