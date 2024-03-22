"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyChatRoomArgs_1 = require("./args/FindManyChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const helpers_1 = require("../../../helpers");
let FindManyChatRoomResolver = class FindManyChatRoomResolver {
    async chatRooms(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyChatRoomResolver = FindManyChatRoomResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatRoom_1.ChatRoom], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChatRoomArgs_1.FindManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyChatRoomResolver.prototype, "chatRooms", null);
exports.FindManyChatRoomResolver = FindManyChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], FindManyChatRoomResolver);
