"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCastInformationArgs_1 = require("./args/AggregateCastInformationArgs");
const CreateManyCastInformationArgs_1 = require("./args/CreateManyCastInformationArgs");
const CreateOneCastInformationArgs_1 = require("./args/CreateOneCastInformationArgs");
const DeleteManyCastInformationArgs_1 = require("./args/DeleteManyCastInformationArgs");
const DeleteOneCastInformationArgs_1 = require("./args/DeleteOneCastInformationArgs");
const FindFirstCastInformationArgs_1 = require("./args/FindFirstCastInformationArgs");
const FindFirstCastInformationOrThrowArgs_1 = require("./args/FindFirstCastInformationOrThrowArgs");
const FindManyCastInformationArgs_1 = require("./args/FindManyCastInformationArgs");
const FindUniqueCastInformationArgs_1 = require("./args/FindUniqueCastInformationArgs");
const FindUniqueCastInformationOrThrowArgs_1 = require("./args/FindUniqueCastInformationOrThrowArgs");
const GroupByCastInformationArgs_1 = require("./args/GroupByCastInformationArgs");
const UpdateManyCastInformationArgs_1 = require("./args/UpdateManyCastInformationArgs");
const UpdateOneCastInformationArgs_1 = require("./args/UpdateOneCastInformationArgs");
const UpsertOneCastInformationArgs_1 = require("./args/UpsertOneCastInformationArgs");
const helpers_1 = require("../../../helpers");
const CastInformation_1 = require("../../../models/CastInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCastInformation_1 = require("../../outputs/AggregateCastInformation");
const CastInformationGroupBy_1 = require("../../outputs/CastInformationGroupBy");
let CastInformationCrudResolver = class CastInformationCrudResolver {
    async aggregateCastInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCastInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async castInformations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async castInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCastInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CastInformationCrudResolver = CastInformationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCastInformation_1.AggregateCastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCastInformationArgs_1.AggregateCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "aggregateCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCastInformationArgs_1.CreateManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "createManyCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCastInformationArgs_1.CreateOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "createOneCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCastInformationArgs_1.DeleteManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "deleteManyCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCastInformationArgs_1.DeleteOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "deleteOneCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastInformationArgs_1.FindFirstCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "findFirstCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastInformationOrThrowArgs_1.FindFirstCastInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "findFirstCastInformationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastInformation_1.CastInformation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCastInformationArgs_1.FindManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "castInformations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastInformationArgs_1.FindUniqueCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "castInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastInformationOrThrowArgs_1.FindUniqueCastInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "getCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastInformationGroupBy_1.CastInformationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCastInformationArgs_1.GroupByCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "groupByCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCastInformationArgs_1.UpdateManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "updateManyCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCastInformationArgs_1.UpdateOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "updateOneCastInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCastInformationArgs_1.UpsertOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationCrudResolver.prototype, "upsertOneCastInformation", null);
exports.CastInformationCrudResolver = CastInformationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], CastInformationCrudResolver);
