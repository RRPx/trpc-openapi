"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueChatMessageArgs_1 = require("./args/FindUniqueChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let FindUniqueChatMessageResolver = exports.FindUniqueChatMessageResolver = class FindUniqueChatMessageResolver {
    async chatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatMessageArgs_1.FindUniqueChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueChatMessageResolver.prototype, "chatMessage", null);
exports.FindUniqueChatMessageResolver = FindUniqueChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], FindUniqueChatMessageResolver);
