"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFavoriteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyFavoriteArgs_1 = require("./args/CreateManyFavoriteArgs");
const Favorite_1 = require("../../../models/Favorite");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyFavoriteResolver = exports.CreateManyFavoriteResolver = class CreateManyFavoriteResolver {
    async createManyFavorite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).favorite.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFavoriteArgs_1.CreateManyFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyFavoriteResolver.prototype, "createManyFavorite", null);
exports.CreateManyFavoriteResolver = CreateManyFavoriteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Favorite_1.Favorite)
], CreateManyFavoriteResolver);
