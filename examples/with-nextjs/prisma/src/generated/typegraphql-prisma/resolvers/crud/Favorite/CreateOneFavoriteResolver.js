"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneFavoriteArgs_1 = require("./args/CreateOneFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const helpers_1 = require("../../../helpers");
let CreateOneFavoriteResolver = exports.CreateOneFavoriteResolver = class CreateOneFavoriteResolver {
    async createOneFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFavoriteArgs_1.CreateOneFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneFavoriteResolver.prototype, "createOneFavorite", null);
exports.CreateOneFavoriteResolver = CreateOneFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], CreateOneFavoriteResolver);
