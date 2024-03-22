"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateNotificationArgs_1 = require("./args/AggregateNotificationArgs");
const CreateManyNotificationArgs_1 = require("./args/CreateManyNotificationArgs");
const CreateOneNotificationArgs_1 = require("./args/CreateOneNotificationArgs");
const DeleteManyNotificationArgs_1 = require("./args/DeleteManyNotificationArgs");
const DeleteOneNotificationArgs_1 = require("./args/DeleteOneNotificationArgs");
const FindFirstNotificationArgs_1 = require("./args/FindFirstNotificationArgs");
const FindFirstNotificationOrThrowArgs_1 = require("./args/FindFirstNotificationOrThrowArgs");
const FindManyNotificationArgs_1 = require("./args/FindManyNotificationArgs");
const FindUniqueNotificationArgs_1 = require("./args/FindUniqueNotificationArgs");
const FindUniqueNotificationOrThrowArgs_1 = require("./args/FindUniqueNotificationOrThrowArgs");
const GroupByNotificationArgs_1 = require("./args/GroupByNotificationArgs");
const UpdateManyNotificationArgs_1 = require("./args/UpdateManyNotificationArgs");
const UpdateOneNotificationArgs_1 = require("./args/UpdateOneNotificationArgs");
const UpsertOneNotificationArgs_1 = require("./args/UpsertOneNotificationArgs");
const helpers_1 = require("../../../helpers");
const Notification_1 = require("../../../models/Notification");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateNotification_1 = require("../../outputs/AggregateNotification");
const NotificationGroupBy_1 = require("../../outputs/NotificationGroupBy");
let NotificationCrudResolver = class NotificationCrudResolver {
    async aggregateNotification(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNotificationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async notifications(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async notification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByNotification(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.NotificationCrudResolver = NotificationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNotification_1.AggregateNotification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNotificationArgs_1.AggregateNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "aggregateNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNotificationArgs_1.CreateManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "createManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneNotificationArgs_1.CreateOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "createOneNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNotificationArgs_1.DeleteManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "deleteManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneNotificationArgs_1.DeleteOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "deleteOneNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationArgs_1.FindFirstNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "findFirstNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationOrThrowArgs_1.FindFirstNotificationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "findFirstNotificationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyNotificationArgs_1.FindManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "notifications", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationArgs_1.FindUniqueNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "notification", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationOrThrowArgs_1.FindUniqueNotificationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "getNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NotificationGroupBy_1.NotificationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNotificationArgs_1.GroupByNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "groupByNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNotificationArgs_1.UpdateManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "updateManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneNotificationArgs_1.UpdateOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "updateOneNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneNotificationArgs_1.UpsertOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "upsertOneNotification", null);
exports.NotificationCrudResolver = NotificationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], NotificationCrudResolver);
