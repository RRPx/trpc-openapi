import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyChatRoomArgs } from "./args/UpdateManyChatRoomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyChatRoomResolver {
    updateManyChatRoom(ctx: any, info: GraphQLResolveInfo, args: UpdateManyChatRoomArgs): Promise<AffectedRowsOutput>;
}
