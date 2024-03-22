"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyChatMessageArgs_1 = require("./args/CreateManyChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyChatMessageResolver = exports.CreateManyChatMessageResolver = class CreateManyChatMessageResolver {
    async createManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyChatMessageArgs_1.CreateManyChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyChatMessageResolver.prototype, "createManyChatMessage", null);
exports.CreateManyChatMessageResolver = CreateManyChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], CreateManyChatMessageResolver);
