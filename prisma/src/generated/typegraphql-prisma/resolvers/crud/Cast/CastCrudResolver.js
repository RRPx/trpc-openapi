"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCastArgs_1 = require("./args/AggregateCastArgs");
const CreateManyCastArgs_1 = require("./args/CreateManyCastArgs");
const CreateOneCastArgs_1 = require("./args/CreateOneCastArgs");
const DeleteManyCastArgs_1 = require("./args/DeleteManyCastArgs");
const DeleteOneCastArgs_1 = require("./args/DeleteOneCastArgs");
const FindFirstCastArgs_1 = require("./args/FindFirstCastArgs");
const FindFirstCastOrThrowArgs_1 = require("./args/FindFirstCastOrThrowArgs");
const FindManyCastArgs_1 = require("./args/FindManyCastArgs");
const FindUniqueCastArgs_1 = require("./args/FindUniqueCastArgs");
const FindUniqueCastOrThrowArgs_1 = require("./args/FindUniqueCastOrThrowArgs");
const GroupByCastArgs_1 = require("./args/GroupByCastArgs");
const UpdateManyCastArgs_1 = require("./args/UpdateManyCastArgs");
const UpdateOneCastArgs_1 = require("./args/UpdateOneCastArgs");
const UpsertOneCastArgs_1 = require("./args/UpsertOneCastArgs");
const helpers_1 = require("../../../helpers");
const Cast_1 = require("../../../models/Cast");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCast_1 = require("../../outputs/AggregateCast");
const CastGroupBy_1 = require("../../outputs/CastGroupBy");
let CastCrudResolver = class CastCrudResolver {
    async aggregateCast(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCastOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async casts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCast(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CastCrudResolver = CastCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCast_1.AggregateCast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCastArgs_1.AggregateCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "aggregateCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCastArgs_1.CreateManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "createManyCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCastArgs_1.CreateOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "createOneCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCastArgs_1.DeleteManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "deleteManyCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCastArgs_1.DeleteOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "deleteOneCast", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastArgs_1.FindFirstCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "findFirstCast", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastOrThrowArgs_1.FindFirstCastOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "findFirstCastOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cast_1.Cast], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCastArgs_1.FindManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "casts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastArgs_1.FindUniqueCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastOrThrowArgs_1.FindUniqueCastOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "getCast", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastGroupBy_1.CastGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCastArgs_1.GroupByCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "groupByCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCastArgs_1.UpdateManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "updateManyCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCastArgs_1.UpdateOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "updateOneCast", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCastArgs_1.UpsertOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastCrudResolver.prototype, "upsertOneCast", null);
exports.CastCrudResolver = CastCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], CastCrudResolver);
