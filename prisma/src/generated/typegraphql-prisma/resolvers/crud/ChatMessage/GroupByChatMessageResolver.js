"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByChatMessageArgs_1 = require("./args/GroupByChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const ChatMessageGroupBy_1 = require("../../outputs/ChatMessageGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByChatMessageResolver = class GroupByChatMessageResolver {
    async groupByChatMessage(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByChatMessageResolver = GroupByChatMessageResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatMessageGroupBy_1.ChatMessageGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChatMessageArgs_1.GroupByChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByChatMessageResolver.prototype, "groupByChatMessage", null);
exports.GroupByChatMessageResolver = GroupByChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], GroupByChatMessageResolver);