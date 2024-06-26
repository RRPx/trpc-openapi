"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneFavoriteArgs_1 = require("./args/UpdateOneFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let UpdateOneFavoriteResolver = exports.UpdateOneFavoriteResolver = class UpdateOneFavoriteResolver {
    async updateOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateOneFavoriteResolver.prototype, "updateOneFavorite", null);
exports.UpdateOneFavoriteResolver = UpdateOneFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], UpdateOneFavoriteResolver);
