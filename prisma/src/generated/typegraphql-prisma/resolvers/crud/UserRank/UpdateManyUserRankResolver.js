"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyUserRankArgs_1 = require("./args/UpdateManyUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUserRankResolver = class UpdateManyUserRankResolver {
    async updateManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyUserRankResolver = UpdateManyUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserRankArgs_1.UpdateManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyUserRankResolver.prototype, "updateManyUserRank", null);
exports.UpdateManyUserRankResolver = UpdateManyUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], UpdateManyUserRankResolver);
