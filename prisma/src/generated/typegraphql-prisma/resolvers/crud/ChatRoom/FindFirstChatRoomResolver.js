"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstChatRoomArgs_1 = require("./args/FindFirstChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const helpers_1 = require("../../../helpers");
let FindFirstChatRoomResolver = class FindFirstChatRoomResolver {
    async findFirstChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstChatRoomResolver = FindFirstChatRoomResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChatRoomArgs_1.FindFirstChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstChatRoomResolver.prototype, "findFirstChatRoom", null);
exports.FindFirstChatRoomResolver = FindFirstChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], FindFirstChatRoomResolver);
