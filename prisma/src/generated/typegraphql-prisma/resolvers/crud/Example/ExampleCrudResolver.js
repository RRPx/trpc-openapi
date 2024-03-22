"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateExampleArgs_1 = require("./args/AggregateExampleArgs");
const CreateManyExampleArgs_1 = require("./args/CreateManyExampleArgs");
const CreateOneExampleArgs_1 = require("./args/CreateOneExampleArgs");
const DeleteManyExampleArgs_1 = require("./args/DeleteManyExampleArgs");
const DeleteOneExampleArgs_1 = require("./args/DeleteOneExampleArgs");
const FindFirstExampleArgs_1 = require("./args/FindFirstExampleArgs");
const FindFirstExampleOrThrowArgs_1 = require("./args/FindFirstExampleOrThrowArgs");
const FindManyExampleArgs_1 = require("./args/FindManyExampleArgs");
const FindUniqueExampleArgs_1 = require("./args/FindUniqueExampleArgs");
const FindUniqueExampleOrThrowArgs_1 = require("./args/FindUniqueExampleOrThrowArgs");
const GroupByExampleArgs_1 = require("./args/GroupByExampleArgs");
const UpdateManyExampleArgs_1 = require("./args/UpdateManyExampleArgs");
const UpdateOneExampleArgs_1 = require("./args/UpdateOneExampleArgs");
const UpsertOneExampleArgs_1 = require("./args/UpsertOneExampleArgs");
const helpers_1 = require("../../../helpers");
const Example_1 = require("../../../models/Example");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateExample_1 = require("../../outputs/AggregateExample");
const ExampleGroupBy_1 = require("../../outputs/ExampleGroupBy");
let ExampleCrudResolver = class ExampleCrudResolver {
    async aggregateExample(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).example.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstExampleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async examples(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async example(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByExample(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ExampleCrudResolver = ExampleCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExample_1.AggregateExample, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExampleArgs_1.AggregateExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "aggregateExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyExampleArgs_1.CreateManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "createManyExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneExampleArgs_1.CreateOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "createOneExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyExampleArgs_1.DeleteManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "deleteManyExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneExampleArgs_1.DeleteOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "deleteOneExample", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExampleArgs_1.FindFirstExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "findFirstExample", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExampleOrThrowArgs_1.FindFirstExampleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "findFirstExampleOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Example_1.Example], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyExampleArgs_1.FindManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "examples", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExampleArgs_1.FindUniqueExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "example", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExampleOrThrowArgs_1.FindUniqueExampleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "getExample", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExampleGroupBy_1.ExampleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExampleArgs_1.GroupByExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "groupByExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyExampleArgs_1.UpdateManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "updateManyExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneExampleArgs_1.UpdateOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "updateOneExample", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneExampleArgs_1.UpsertOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleCrudResolver.prototype, "upsertOneExample", null);
exports.ExampleCrudResolver = ExampleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], ExampleCrudResolver);
