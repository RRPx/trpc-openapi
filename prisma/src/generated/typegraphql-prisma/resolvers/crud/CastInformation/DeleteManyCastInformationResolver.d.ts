import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCastInformationArgs } from "./args/DeleteManyCastInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCastInformationResolver {
    deleteManyCastInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCastInformationArgs): Promise<AffectedRowsOutput>;
}
