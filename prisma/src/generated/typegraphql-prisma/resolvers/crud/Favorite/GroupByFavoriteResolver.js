"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByFavoriteArgs_1 = require("./args/GroupByFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const FavoriteGroupBy_1 = require("../../outputs/FavoriteGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFavoriteResolver = class GroupByFavoriteResolver {
    async groupByFavorite(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByFavoriteResolver = GroupByFavoriteResolver;
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
], GroupByFavoriteResolver.prototype, "groupByFavorite", null);
exports.GroupByFavoriteResolver = GroupByFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], GroupByFavoriteResolver);
