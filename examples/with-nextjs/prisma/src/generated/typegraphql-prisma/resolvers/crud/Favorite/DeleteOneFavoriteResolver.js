"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneFavoriteArgs_1 = require("./args/DeleteOneFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let DeleteOneFavoriteResolver = exports.DeleteOneFavoriteResolver = class DeleteOneFavoriteResolver {
    async deleteOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFavoriteArgs_1.DeleteOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneFavoriteResolver.prototype, "deleteOneFavorite", null);
exports.DeleteOneFavoriteResolver = DeleteOneFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], DeleteOneFavoriteResolver);
