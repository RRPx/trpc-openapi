"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneChatMessageArgs_1 = require("./args/UpsertOneChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let UpsertOneChatMessageResolver = exports.UpsertOneChatMessageResolver = class UpsertOneChatMessageResolver {
    async upsertOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatMessage_1.ChatMessage, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChatMessageArgs_1.UpsertOneChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneChatMessageResolver.prototype, "upsertOneChatMessage", null);
exports.UpsertOneChatMessageResolver = UpsertOneChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], UpsertOneChatMessageResolver);
