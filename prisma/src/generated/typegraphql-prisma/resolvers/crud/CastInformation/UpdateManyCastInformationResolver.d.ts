import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCastInformationArgs } from "./args/UpdateManyCastInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCastInformationResolver {
    updateManyCastInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCastInformationArgs): Promise<AffectedRowsOutput>;
}
