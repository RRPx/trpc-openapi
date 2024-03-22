import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyChatRoomArgs } from "./args/DeleteManyChatRoomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyChatRoomResolver {
    deleteManyChatRoom(ctx: any, info: GraphQLResolveInfo, args: DeleteManyChatRoomArgs): Promise<AffectedRowsOutput>;
}
