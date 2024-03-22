"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessage_1 = require("../../../models/ChatMessage");
const ChatRoom_1 = require("../../../models/ChatRoom");
const Reservation_1 = require("../../../models/Reservation");
const ChatRoomMessagesArgs_1 = require("./args/ChatRoomMessagesArgs");
const helpers_1 = require("../../../helpers");
let ChatRoomRelationsResolver = class ChatRoomRelationsResolver {
    async reservation(chatRoom, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findUniqueOrThrow({
            where: {
                id: chatRoom.id,
            },
        }).reservation({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async messages(chatRoom, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findUniqueOrThrow({
            where: {
                id: chatRoom.id,
            },
        }).messages({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ChatRoomRelationsResolver = ChatRoomRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reservation_1.Reservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChatRoom_1.ChatRoom, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomRelationsResolver.prototype, "reservation", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ChatMessage_1.ChatMessage], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChatRoom_1.ChatRoom, Object, Object, ChatRoomMessagesArgs_1.ChatRoomMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomRelationsResolver.prototype, "messages", null);
exports.ChatRoomRelationsResolver = ChatRoomRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], ChatRoomRelationsResolver);
