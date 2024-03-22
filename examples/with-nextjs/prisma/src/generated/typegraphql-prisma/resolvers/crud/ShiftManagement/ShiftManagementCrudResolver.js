"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShiftManagementArgs_1 = require("./args/AggregateShiftManagementArgs");
const CreateManyShiftManagementArgs_1 = require("./args/CreateManyShiftManagementArgs");
const CreateOneShiftManagementArgs_1 = require("./args/CreateOneShiftManagementArgs");
const DeleteManyShiftManagementArgs_1 = require("./args/DeleteManyShiftManagementArgs");
const DeleteOneShiftManagementArgs_1 = require("./args/DeleteOneShiftManagementArgs");
const FindFirstShiftManagementArgs_1 = require("./args/FindFirstShiftManagementArgs");
const FindFirstShiftManagementOrThrowArgs_1 = require("./args/FindFirstShiftManagementOrThrowArgs");
const FindManyShiftManagementArgs_1 = require("./args/FindManyShiftManagementArgs");
const FindUniqueShiftManagementArgs_1 = require("./args/FindUniqueShiftManagementArgs");
const FindUniqueShiftManagementOrThrowArgs_1 = require("./args/FindUniqueShiftManagementOrThrowArgs");
const GroupByShiftManagementArgs_1 = require("./args/GroupByShiftManagementArgs");
const UpdateManyShiftManagementArgs_1 = require("./args/UpdateManyShiftManagementArgs");
const UpdateOneShiftManagementArgs_1 = require("./args/UpdateOneShiftManagementArgs");
const UpsertOneShiftManagementArgs_1 = require("./args/UpsertOneShiftManagementArgs");
const helpers_1 = require("../../../helpers");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShiftManagement_1 = require("../../outputs/AggregateShiftManagement");
const ShiftManagementGroupBy_1 = require("../../outputs/ShiftManagementGroupBy");
let ShiftManagementCrudResolver = exports.ShiftManagementCrudResolver = class ShiftManagementCrudResolver {
    async aggregateShiftManagement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShiftManagementOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shiftManagements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByShiftManagement(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShiftManagement_1.AggregateShiftManagement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShiftManagementArgs_1.AggregateShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "aggregateShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShiftManagementArgs_1.CreateManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "createManyShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneShiftManagementArgs_1.CreateOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "createOneShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShiftManagementArgs_1.DeleteManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "deleteManyShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShiftManagementArgs_1.DeleteOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "deleteOneShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShiftManagementArgs_1.FindFirstShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "findFirstShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShiftManagementOrThrowArgs_1.FindFirstShiftManagementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "findFirstShiftManagementOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShiftManagement_1.ShiftManagement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShiftManagementArgs_1.FindManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "shiftManagements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShiftManagementArgs_1.FindUniqueShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "shiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShiftManagementOrThrowArgs_1.FindUniqueShiftManagementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "getShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShiftManagementGroupBy_1.ShiftManagementGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShiftManagementArgs_1.GroupByShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "groupByShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShiftManagementArgs_1.UpdateManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "updateManyShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneShiftManagementArgs_1.UpdateOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "updateOneShiftManagement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneShiftManagementArgs_1.UpsertOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementCrudResolver.prototype, "upsertOneShiftManagement", null);
exports.ShiftManagementCrudResolver = ShiftManagementCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], ShiftManagementCrudResolver);
