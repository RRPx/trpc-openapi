"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneChatMessageArgs_1 = require("./args/UpdateOneChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let UpdateOneChatMessageResolver = exports.UpdateOneChatMessageResolver = class UpdateOneChatMessageResolver {
    async updateOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChatMessageArgs_1.UpdateOneChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneChatMessageResolver.prototype, "updateOneChatMessage", null);
exports.UpdateOneChatMessageResolver = UpdateOneChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], UpdateOneChatMessageResolver);
