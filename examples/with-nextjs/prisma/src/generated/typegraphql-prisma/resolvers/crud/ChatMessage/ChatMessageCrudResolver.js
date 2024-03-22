"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChatMessageArgs_1 = require("./args/AggregateChatMessageArgs");
const CreateManyChatMessageArgs_1 = require("./args/CreateManyChatMessageArgs");
const CreateOneChatMessageArgs_1 = require("./args/CreateOneChatMessageArgs");
const DeleteManyChatMessageArgs_1 = require("./args/DeleteManyChatMessageArgs");
const DeleteOneChatMessageArgs_1 = require("./args/DeleteOneChatMessageArgs");
const FindFirstChatMessageArgs_1 = require("./args/FindFirstChatMessageArgs");
const FindFirstChatMessageOrThrowArgs_1 = require("./args/FindFirstChatMessageOrThrowArgs");
const FindManyChatMessageArgs_1 = require("./args/FindManyChatMessageArgs");
const FindUniqueChatMessageArgs_1 = require("./args/FindUniqueChatMessageArgs");
const FindUniqueChatMessageOrThrowArgs_1 = require("./args/FindUniqueChatMessageOrThrowArgs");
const GroupByChatMessageArgs_1 = require("./args/GroupByChatMessageArgs");
const UpdateManyChatMessageArgs_1 = require("./args/UpdateManyChatMessageArgs");
const UpdateOneChatMessageArgs_1 = require("./args/UpdateOneChatMessageArgs");
const UpsertOneChatMessageArgs_1 = require("./args/UpsertOneChatMessageArgs");
const helpers_1 = require("../../../helpers");
const ChatMessage_1 = require("../../../models/ChatMessage");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateChatMessage_1 = require("../../outputs/AggregateChatMessage");
const ChatMessageGroupBy_1 = require("../../outputs/ChatMessageGroupBy");
let ChatMessageCrudResolver = exports.ChatMessageCrudResolver = class ChatMessageCrudResolver {
    async aggregateChatMessage(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChatMessageOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async chatMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async chatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByChatMessage(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneChatMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatMessage.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], ChatMessageCrudResolver.prototype, "aggregateChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "createManyChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "createOneChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "deleteManyChatMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneChatMessageArgs_1.DeleteOneChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatMessageCrudResolver.prototype, "deleteOneChatMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChatMessageArgs_1.FindFirstChatMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatMessageCrudResolver.prototype, "findFirstChatMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChatMessageOrThrowArgs_1.FindFirstChatMessageOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatMessageCrudResolver.prototype, "findFirstChatMessageOrThrow", null);
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
], ChatMessageCrudResolver.prototype, "chatMessages", null);
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
], ChatMessageCrudResolver.prototype, "chatMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatMessage_1.ChatMessage, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatMessageOrThrowArgs_1.FindUniqueChatMessageOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatMessageCrudResolver.prototype, "getChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "groupByChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "updateManyChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "updateOneChatMessage", null);
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
], ChatMessageCrudResolver.prototype, "upsertOneChatMessage", null);
exports.ChatMessageCrudResolver = ChatMessageCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatMessage_1.ChatMessage)
], ChatMessageCrudResolver);
