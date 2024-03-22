"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const Client_1 = require("../../../models/Client");
const Favorite_1 = require("../../../models/Favorite");
const FavoriteCastArgs_1 = require("./args/FavoriteCastArgs");
const FavoriteClientArgs_1 = require("./args/FavoriteClientArgs");
const helpers_1 = require("../../../helpers");
let FavoriteRelationsResolver = exports.FavoriteRelationsResolver = class FavoriteRelationsResolver {
    async client(favorite, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findUniqueOrThrow({
            where: {
                id: favorite.id,
            },
        }).client({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cast(favorite, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findUniqueOrThrow({
            where: {
                id: favorite.id,
            },
        }).cast({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Favorite_1.Favorite, Object, Object, FavoriteClientArgs_1.FavoriteClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteRelationsResolver.prototype, "client", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Favorite_1.Favorite, Object, Object, FavoriteCastArgs_1.FavoriteCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoriteRelationsResolver.prototype, "cast", null);
exports.FavoriteRelationsResolver = FavoriteRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], FavoriteRelationsResolver);
