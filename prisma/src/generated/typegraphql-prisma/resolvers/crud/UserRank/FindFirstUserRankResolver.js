"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserRankArgs_1 = require("./args/FindFirstUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let FindFirstUserRankResolver = class FindFirstUserRankResolver {
    async findFirstUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstUserRankResolver = FindFirstUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserRankArgs_1.FindFirstUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserRankResolver.prototype, "findFirstUserRank", null);
exports.FindFirstUserRankResolver = FindFirstUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], FindFirstUserRankResolver);
