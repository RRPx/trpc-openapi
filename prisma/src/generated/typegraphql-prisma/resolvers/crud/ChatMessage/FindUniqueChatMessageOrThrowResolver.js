"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatMessageOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueChatMessageOrThrowArgs_1 = require("./args/FindUniqueChatMessageOrThrowArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let FindUniqueChatMessageOrThrowResolver = class FindUniqueChatMessageOrThrowResolver {
    async getChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueChatMessageOrThrowResolver = FindUniqueChatMessageOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatMessageOrThrowArgs_1.FindUniqueChatMessageOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueChatMessageOrThrowResolver.prototype, "getChatMessage", null);
exports.FindUniqueChatMessageOrThrowResolver = FindUniqueChatMessageOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], FindUniqueChatMessageOrThrowResolver);
