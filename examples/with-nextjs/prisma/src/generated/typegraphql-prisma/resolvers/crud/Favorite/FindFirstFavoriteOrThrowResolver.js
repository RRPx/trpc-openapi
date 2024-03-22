"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFavoriteOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstFavoriteOrThrowArgs_1 = require("./args/FindFirstFavoriteOrThrowArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let FindFirstFavoriteOrThrowResolver = exports.FindFirstFavoriteOrThrowResolver = class FindFirstFavoriteOrThrowResolver {
    async findFirstFavoriteOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindFirstFavoriteOrThrowResolver.prototype, "findFirstFavoriteOrThrow", null);
exports.FindFirstFavoriteOrThrowResolver = FindFirstFavoriteOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], FindFirstFavoriteOrThrowResolver);
