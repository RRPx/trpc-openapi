"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFavoriteOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueFavoriteOrThrowArgs_1 = require("./args/FindUniqueFavoriteOrThrowArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let FindUniqueFavoriteOrThrowResolver = class FindUniqueFavoriteOrThrowResolver {
    async getFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueFavoriteOrThrowResolver = FindUniqueFavoriteOrThrowResolver;
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
], FindUniqueFavoriteOrThrowResolver.prototype, "getFavorite", null);
exports.FindUniqueFavoriteOrThrowResolver = FindUniqueFavoriteOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], FindUniqueFavoriteOrThrowResolver);
