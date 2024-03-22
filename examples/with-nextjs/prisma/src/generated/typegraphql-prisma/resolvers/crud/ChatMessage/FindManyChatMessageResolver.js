"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyChatMessageArgs_1 = require("./args/FindManyChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let FindManyChatMessageResolver = exports.FindManyChatMessageResolver = class FindManyChatMessageResolver {
    async chatMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatMessage_1.ChatMessage], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChatMessageArgs_1.FindManyChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyChatMessageResolver.prototype, "chatMessages", null);
exports.FindManyChatMessageResolver = FindManyChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], FindManyChatMessageResolver);
