"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFavoriteArgs_1 = require("./args/AggregateFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const AggregateFavorite_1 = require("../../outputs/AggregateFavorite");
const helpers_1 = require("../../../helpers");
let AggregateFavoriteResolver = class AggregateFavoriteResolver {
    async aggregateFavorite(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateFavoriteResolver = AggregateFavoriteResolver;
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
], AggregateFavoriteResolver.prototype, "aggregateFavorite", null);
exports.AggregateFavoriteResolver = AggregateFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], AggregateFavoriteResolver);
