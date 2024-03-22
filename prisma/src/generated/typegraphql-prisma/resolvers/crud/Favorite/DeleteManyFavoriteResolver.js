"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyFavoriteArgs_1 = require("./args/DeleteManyFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyFavoriteResolver = class DeleteManyFavoriteResolver {
    async deleteManyFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyFavoriteResolver = DeleteManyFavoriteResolver;
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
], DeleteManyFavoriteResolver.prototype, "deleteManyFavorite", null);
exports.DeleteManyFavoriteResolver = DeleteManyFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], DeleteManyFavoriteResolver);
