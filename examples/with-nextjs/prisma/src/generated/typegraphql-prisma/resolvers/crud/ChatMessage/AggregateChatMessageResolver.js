"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChatMessageArgs_1 = require("./args/AggregateChatMessageArgs");
const ChatMessage_1 = require("../../../models/ChatMessage");
const AggregateChatMessage_1 = require("../../outputs/AggregateChatMessage");
const helpers_1 = require("../../../helpers");
let AggregateChatMessageResolver = exports.AggregateChatMessageResolver = class AggregateChatMessageResolver {
    async aggregateChatMessage(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChatMessage_1.AggregateChatMessage, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChatMessageArgs_1.AggregateChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateChatMessageResolver.prototype, "aggregateChatMessage", null);
exports.AggregateChatMessageResolver = AggregateChatMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], AggregateChatMessageResolver);
