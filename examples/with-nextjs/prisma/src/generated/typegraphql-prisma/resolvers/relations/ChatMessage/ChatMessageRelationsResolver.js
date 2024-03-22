"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessage_1 = require("../../../models/ChatMessage");
const ChatRoom_1 = require("../../../models/ChatRoom");
const helpers_1 = require("../../../helpers");
let ChatMessageRelationsResolver = exports.ChatMessageRelationsResolver = class ChatMessageRelationsResolver {
    async chat_room(chatMessage, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findUniqueOrThrow({
            where: {
                id: chatMessage.id,
            },
        }).chat_room({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ChatRoom_1.ChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChatMessage_1.ChatMessage, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatMessageRelationsResolver.prototype, "chat_room", null);
exports.ChatMessageRelationsResolver = ChatMessageRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], ChatMessageRelationsResolver);
