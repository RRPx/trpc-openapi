import type { GraphQLResolveInfo } from "graphql";
import { CreateManyChatRoomArgs } from "./args/CreateManyChatRoomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyChatRoomResolver {
    createManyChatRoom(ctx: any, info: GraphQLResolveInfo, args: CreateManyChatRoomArgs): Promise<AffectedRowsOutput>;
}
