"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueChatRoomArgs_1 = require("./args/FindUniqueChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const helpers_1 = require("../../../helpers");
let FindUniqueChatRoomResolver = class FindUniqueChatRoomResolver {
    async chatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueChatRoomResolver = FindUniqueChatRoomResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatRoomArgs_1.FindUniqueChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueChatRoomResolver.prototype, "chatRoom", null);
exports.FindUniqueChatRoomResolver = FindUniqueChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], FindUniqueChatRoomResolver);
