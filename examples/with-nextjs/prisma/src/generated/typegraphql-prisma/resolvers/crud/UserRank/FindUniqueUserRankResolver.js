"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUserRankArgs_1 = require("./args/FindUniqueUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let FindUniqueUserRankResolver = exports.FindUniqueUserRankResolver = class FindUniqueUserRankResolver {
    async userRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserRankArgs_1.FindUniqueUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUserRankResolver.prototype, "userRank", null);
exports.FindUniqueUserRankResolver = FindUniqueUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], FindUniqueUserRankResolver);
