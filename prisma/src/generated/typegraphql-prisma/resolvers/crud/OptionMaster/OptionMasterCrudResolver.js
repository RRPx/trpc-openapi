"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOptionMasterArgs_1 = require("./args/AggregateOptionMasterArgs");
const CreateManyOptionMasterArgs_1 = require("./args/CreateManyOptionMasterArgs");
const CreateOneOptionMasterArgs_1 = require("./args/CreateOneOptionMasterArgs");
const DeleteManyOptionMasterArgs_1 = require("./args/DeleteManyOptionMasterArgs");
const DeleteOneOptionMasterArgs_1 = require("./args/DeleteOneOptionMasterArgs");
const FindFirstOptionMasterArgs_1 = require("./args/FindFirstOptionMasterArgs");
const FindFirstOptionMasterOrThrowArgs_1 = require("./args/FindFirstOptionMasterOrThrowArgs");
const FindManyOptionMasterArgs_1 = require("./args/FindManyOptionMasterArgs");
const FindUniqueOptionMasterArgs_1 = require("./args/FindUniqueOptionMasterArgs");
const FindUniqueOptionMasterOrThrowArgs_1 = require("./args/FindUniqueOptionMasterOrThrowArgs");
const GroupByOptionMasterArgs_1 = require("./args/GroupByOptionMasterArgs");
const UpdateManyOptionMasterArgs_1 = require("./args/UpdateManyOptionMasterArgs");
const UpdateOneOptionMasterArgs_1 = require("./args/UpdateOneOptionMasterArgs");
const UpsertOneOptionMasterArgs_1 = require("./args/UpsertOneOptionMasterArgs");
const helpers_1 = require("../../../helpers");
const OptionMaster_1 = require("../../../models/OptionMaster");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOptionMaster_1 = require("../../outputs/AggregateOptionMaster");
const OptionMasterGroupBy_1 = require("../../outputs/OptionMasterGroupBy");
let OptionMasterCrudResolver = class OptionMasterCrudResolver {
    async aggregateOptionMaster(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOptionMasterOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async optionMasters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async optionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOptionMaster(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OptionMasterCrudResolver = OptionMasterCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOptionMaster_1.AggregateOptionMaster, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOptionMasterArgs_1.AggregateOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "aggregateOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOptionMasterArgs_1.CreateManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "createManyOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOptionMasterArgs_1.CreateOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "createOneOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOptionMasterArgs_1.DeleteManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "deleteManyOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOptionMasterArgs_1.DeleteOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "deleteOneOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOptionMasterArgs_1.FindFirstOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "findFirstOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOptionMasterOrThrowArgs_1.FindFirstOptionMasterOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "findFirstOptionMasterOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OptionMaster_1.OptionMaster], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOptionMasterArgs_1.FindManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "optionMasters", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOptionMasterArgs_1.FindUniqueOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "optionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOptionMasterOrThrowArgs_1.FindUniqueOptionMasterOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "getOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OptionMasterGroupBy_1.OptionMasterGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOptionMasterArgs_1.GroupByOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "groupByOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOptionMasterArgs_1.UpdateManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "updateManyOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOptionMasterArgs_1.UpdateOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "updateOneOptionMaster", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOptionMasterArgs_1.UpsertOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterCrudResolver.prototype, "upsertOneOptionMaster", null);
exports.OptionMasterCrudResolver = OptionMasterCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], OptionMasterCrudResolver);
