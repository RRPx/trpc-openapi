import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCastInformationArgs } from "./args/CreateOneCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class CreateOneCastInformationResolver {
    createOneCastInformation(ctx: any, info: GraphQLResolveInfo, args: CreateOneCastInformationArgs): Promise<CastInformation>;
}
