"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserRankOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUserRankOrThrowArgs_1 = require("./args/FindUniqueUserRankOrThrowArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let FindUniqueUserRankOrThrowResolver = exports.FindUniqueUserRankOrThrowResolver = class FindUniqueUserRankOrThrowResolver {
    async getUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserRankOrThrowArgs_1.FindUniqueUserRankOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUserRankOrThrowResolver.prototype, "getUserRank", null);
exports.FindUniqueUserRankOrThrowResolver = FindUniqueUserRankOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], FindUniqueUserRankOrThrowResolver);
