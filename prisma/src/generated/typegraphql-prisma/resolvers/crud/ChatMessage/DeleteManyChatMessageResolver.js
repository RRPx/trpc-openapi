"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyChatMessageArgs_1 = require("./args/DeleteManyChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyChatMessageResolver = class DeleteManyChatMessageResolver {
    async deleteManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyChatMessageResolver = DeleteManyChatMessageResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyChatMessageArgs_1.DeleteManyChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyChatMessageResolver.prototype, "deleteManyChatMessage", null);
exports.DeleteManyChatMessageResolver = DeleteManyChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], DeleteManyChatMessageResolver);
