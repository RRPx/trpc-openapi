import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCastInformationArgs } from "./args/CreateManyCastInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCastInformationResolver {
    createManyCastInformation(ctx: any, info: GraphQLResolveInfo, args: CreateManyCastInformationArgs): Promise<AffectedRowsOutput>;
}
