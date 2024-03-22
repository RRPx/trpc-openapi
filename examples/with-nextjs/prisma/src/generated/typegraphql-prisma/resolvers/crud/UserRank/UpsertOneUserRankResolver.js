"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneUserRankArgs_1 = require("./args/UpsertOneUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let UpsertOneUserRankResolver = exports.UpsertOneUserRankResolver = class UpsertOneUserRankResolver {
    async upsertOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserRankArgs_1.UpsertOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneUserRankResolver.prototype, "upsertOneUserRank", null);
exports.UpsertOneUserRankResolver = UpsertOneUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], UpsertOneUserRankResolver);
