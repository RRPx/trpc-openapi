"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChatRoomArgs_1 = require("./args/AggregateChatRoomArgs");
const CreateManyChatRoomArgs_1 = require("./args/CreateManyChatRoomArgs");
const CreateOneChatRoomArgs_1 = require("./args/CreateOneChatRoomArgs");
const DeleteManyChatRoomArgs_1 = require("./args/DeleteManyChatRoomArgs");
const DeleteOneChatRoomArgs_1 = require("./args/DeleteOneChatRoomArgs");
const FindFirstChatRoomArgs_1 = require("./args/FindFirstChatRoomArgs");
const FindFirstChatRoomOrThrowArgs_1 = require("./args/FindFirstChatRoomOrThrowArgs");
const FindManyChatRoomArgs_1 = require("./args/FindManyChatRoomArgs");
const FindUniqueChatRoomArgs_1 = require("./args/FindUniqueChatRoomArgs");
const FindUniqueChatRoomOrThrowArgs_1 = require("./args/FindUniqueChatRoomOrThrowArgs");
const GroupByChatRoomArgs_1 = require("./args/GroupByChatRoomArgs");
const UpdateManyChatRoomArgs_1 = require("./args/UpdateManyChatRoomArgs");
const UpdateOneChatRoomArgs_1 = require("./args/UpdateOneChatRoomArgs");
const UpsertOneChatRoomArgs_1 = require("./args/UpsertOneChatRoomArgs");
const helpers_1 = require("../../../helpers");
const ChatRoom_1 = require("../../../models/ChatRoom");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateChatRoom_1 = require("../../outputs/AggregateChatRoom");
const ChatRoomGroupBy_1 = require("../../outputs/ChatRoomGroupBy");
let ChatRoomCrudResolver = exports.ChatRoomCrudResolver = class ChatRoomCrudResolver {
    async aggregateChatRoom(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChatRoomOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async chatRooms(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async chatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByChatRoom(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChatRoom_1.AggregateChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChatRoomArgs_1.AggregateChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "aggregateChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyChatRoomArgs_1.CreateManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "createManyChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatRoom_1.ChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChatRoomArgs_1.CreateOneChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "createOneChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyChatRoomArgs_1.DeleteManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "deleteManyChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneChatRoomArgs_1.DeleteOneChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "deleteOneChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChatRoomArgs_1.FindFirstChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "findFirstChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChatRoomOrThrowArgs_1.FindFirstChatRoomOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "findFirstChatRoomOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatRoom_1.ChatRoom], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChatRoomArgs_1.FindManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "chatRooms", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatRoomArgs_1.FindUniqueChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "chatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChatRoomOrThrowArgs_1.FindUniqueChatRoomOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "getChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatRoomGroupBy_1.ChatRoomGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChatRoomArgs_1.GroupByChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "groupByChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyChatRoomArgs_1.UpdateManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "updateManyChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChatRoomArgs_1.UpdateOneChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "updateOneChatRoom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatRoom_1.ChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChatRoomArgs_1.UpsertOneChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChatRoomCrudResolver.prototype, "upsertOneChatRoom", null);
exports.ChatRoomCrudResolver = ChatRoomCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], ChatRoomCrudResolver);
