"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserRankArgs_1 = require("./args/AggregateUserRankArgs");
const CreateManyUserRankArgs_1 = require("./args/CreateManyUserRankArgs");
const CreateOneUserRankArgs_1 = require("./args/CreateOneUserRankArgs");
const DeleteManyUserRankArgs_1 = require("./args/DeleteManyUserRankArgs");
const DeleteOneUserRankArgs_1 = require("./args/DeleteOneUserRankArgs");
const FindFirstUserRankArgs_1 = require("./args/FindFirstUserRankArgs");
const FindFirstUserRankOrThrowArgs_1 = require("./args/FindFirstUserRankOrThrowArgs");
const FindManyUserRankArgs_1 = require("./args/FindManyUserRankArgs");
const FindUniqueUserRankArgs_1 = require("./args/FindUniqueUserRankArgs");
const FindUniqueUserRankOrThrowArgs_1 = require("./args/FindUniqueUserRankOrThrowArgs");
const GroupByUserRankArgs_1 = require("./args/GroupByUserRankArgs");
const UpdateManyUserRankArgs_1 = require("./args/UpdateManyUserRankArgs");
const UpdateOneUserRankArgs_1 = require("./args/UpdateOneUserRankArgs");
const UpsertOneUserRankArgs_1 = require("./args/UpsertOneUserRankArgs");
const helpers_1 = require("../../../helpers");
const UserRank_1 = require("../../../models/UserRank");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserRank_1 = require("../../outputs/AggregateUserRank");
const UserRankGroupBy_1 = require("../../outputs/UserRankGroupBy");
let UserRankCrudResolver = exports.UserRankCrudResolver = class UserRankCrudResolver {
    async aggregateUserRank(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserRankOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async userRanks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async userRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUserRank(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUserRank_1.AggregateUserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserRankArgs_1.AggregateUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "aggregateUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUserRankArgs_1.CreateManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "createManyUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserRankArgs_1.CreateOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "createOneUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserRankArgs_1.DeleteManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "deleteManyUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUserRankArgs_1.DeleteOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "deleteOneUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserRankArgs_1.FindFirstUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "findFirstUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserRankOrThrowArgs_1.FindFirstUserRankOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "findFirstUserRankOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserRank_1.UserRank], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserRankArgs_1.FindManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "userRanks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserRankArgs_1.FindUniqueUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "userRank", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserRankOrThrowArgs_1.FindUniqueUserRankOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "getUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserRankGroupBy_1.UserRankGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserRankArgs_1.GroupByUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "groupByUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserRankArgs_1.UpdateManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "updateManyUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserRankArgs_1.UpdateOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "updateOneUserRank", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserRankArgs_1.UpsertOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankCrudResolver.prototype, "upsertOneUserRank", null);
exports.UserRankCrudResolver = UserRankCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], UserRankCrudResolver);
