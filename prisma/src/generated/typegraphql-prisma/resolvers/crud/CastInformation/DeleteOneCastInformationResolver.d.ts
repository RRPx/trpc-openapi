import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCastInformationArgs } from "./args/DeleteOneCastInformationArgs";
import { CastInformation } from "../../../models/CastInformation";
export declare class DeleteOneCastInformationResolver {
    deleteOneCastInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCastInformationArgs): Promise<CastInformation | null>;
}
