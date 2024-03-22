"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyChatMessageArgs_1 = require("./args/UpdateManyChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyChatMessageResolver = exports.UpdateManyChatMessageResolver = class UpdateManyChatMessageResolver {
    async updateManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyChatMessageArgs_1.UpdateManyChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyChatMessageResolver.prototype, "updateManyChatMessage", null);
exports.UpdateManyChatMessageResolver = UpdateManyChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], UpdateManyChatMessageResolver);