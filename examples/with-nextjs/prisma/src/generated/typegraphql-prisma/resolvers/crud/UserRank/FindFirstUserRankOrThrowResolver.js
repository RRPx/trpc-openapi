"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserRankOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserRankOrThrowArgs_1 = require("./args/FindFirstUserRankOrThrowArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let FindFirstUserRankOrThrowResolver = exports.FindFirstUserRankOrThrowResolver = class FindFirstUserRankOrThrowResolver {
    async findFirstUserRankOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserRankOrThrowArgs_1.FindFirstUserRankOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserRankOrThrowResolver.prototype, "findFirstUserRankOrThrow", null);
exports.FindFirstUserRankOrThrowResolver = FindFirstUserRankOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], FindFirstUserRankOrThrowResolver);
