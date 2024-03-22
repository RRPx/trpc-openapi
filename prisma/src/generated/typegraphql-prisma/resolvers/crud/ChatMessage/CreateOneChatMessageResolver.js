"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneChatMessageArgs_1 = require("./args/CreateOneChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const helpers_1 = require("../../../helpers");
let CreateOneChatMessageResolver = class CreateOneChatMessageResolver {
    async createOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneChatMessageResolver = CreateOneChatMessageResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatMessage_1.ChatMessage, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChatMessageArgs_1.CreateOneChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneChatMessageResolver.prototype, "createOneChatMessage", null);
exports.CreateOneChatMessageResolver = CreateOneChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], CreateOneChatMessageResolver);
