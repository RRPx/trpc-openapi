"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneFavoriteArgs_1 = require("./args/UpsertOneFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let UpsertOneFavoriteResolver = exports.UpsertOneFavoriteResolver = class UpsertOneFavoriteResolver {
    async upsertOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneFavoriteResolver.prototype, "upsertOneFavorite", null);
exports.UpsertOneFavoriteResolver = UpsertOneFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], UpsertOneFavoriteResolver);
