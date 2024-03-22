"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyUserRankArgs_1 = require("./args/FindManyUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let FindManyUserRankResolver = class FindManyUserRankResolver {
    async userRanks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyUserRankResolver = FindManyUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserRank_1.UserRank], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserRankArgs_1.FindManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyUserRankResolver.prototype, "userRanks", null);
exports.FindManyUserRankResolver = FindManyUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], FindManyUserRankResolver);
