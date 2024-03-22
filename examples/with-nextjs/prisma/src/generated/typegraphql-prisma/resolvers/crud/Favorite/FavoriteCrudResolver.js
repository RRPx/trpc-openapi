"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFavoriteArgs_1 = require("./args/AggregateFavoriteArgs");
const CreateManyFavoriteArgs_1 = require("./args/CreateManyFavoriteArgs");
const CreateOneFavoriteArgs_1 = require("./args/CreateOneFavoriteArgs");
const DeleteManyFavoriteArgs_1 = require("./args/DeleteManyFavoriteArgs");
const DeleteOneFavoriteArgs_1 = require("./args/DeleteOneFavoriteArgs");
const FindFirstFavoriteArgs_1 = require("./args/FindFirstFavoriteArgs");
const FindFirstFavoriteOrThrowArgs_1 = require("./args/FindFirstFavoriteOrThrowArgs");
const FindManyFavoriteArgs_1 = require("./args/FindManyFavoriteArgs");
const FindUniqueFavoriteArgs_1 = require("./args/FindUniqueFavoriteArgs");
const FindUniqueFavoriteOrThrowArgs_1 = require("./args/FindUniqueFavoriteOrThrowArgs");
const GroupByFavoriteArgs_1 = require("./args/GroupByFavoriteArgs");
const UpdateManyFavoriteArgs_1 = require("./args/UpdateManyFavoriteArgs");
const UpdateOneFavoriteArgs_1 = require("./args/UpdateOneFavoriteArgs");
const UpsertOneFavoriteArgs_1 = require("./args/UpsertOneFavoriteArgs");
const helpers_1 = require("../../../helpers");
const Favorite_1 = require("../../../models/Favorite");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFavorite_1 = require("../../outputs/AggregateFavorite");
const FavoriteGroupBy_1 = require("../../outputs/FavoriteGroupBy");
let FavoriteCrudResolver = exports.FavoriteCrudResolver = class FavoriteCrudResolver {
    async aggregateFavorite(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFavoriteOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async favorites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async favorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByFavorite(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFavorite_1.AggregateFavorite, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFavoriteArgs_1.AggregateFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "aggregateFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFavoriteArgs_1.CreateManyFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "createManyFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Favorite_1.Favorite, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFavoriteArgs_1.CreateOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "createOneFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFavoriteArgs_1.DeleteManyFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "deleteManyFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFavoriteArgs_1.DeleteOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "deleteOneFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFavoriteArgs_1.FindFirstFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "findFirstFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFavoriteOrThrowArgs_1.FindFirstFavoriteOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "findFirstFavoriteOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Favorite_1.Favorite], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFavoriteArgs_1.FindManyFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "favorites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFavoriteArgs_1.FindUniqueFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "favorite", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFavoriteOrThrowArgs_1.FindUniqueFavoriteOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "getFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FavoriteGroupBy_1.FavoriteGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFavoriteArgs_1.GroupByFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "groupByFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFavoriteArgs_1.UpdateManyFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "updateManyFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Favorite_1.Favorite, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFavoriteArgs_1.UpdateOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "updateOneFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Favorite_1.Favorite, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFavoriteArgs_1.UpsertOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteCrudResolver.prototype, "upsertOneFavorite", null);
exports.FavoriteCrudResolver = FavoriteCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], FavoriteCrudResolver);
