"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyUserRankArgs_1 = require("./args/DeleteManyUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUserRankResolver = class DeleteManyUserRankResolver {
    async deleteManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyUserRankResolver = DeleteManyUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserRankArgs_1.DeleteManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyUserRankResolver.prototype, "deleteManyUserRank", null);
exports.DeleteManyUserRankResolver = DeleteManyUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], DeleteManyUserRankResolver);
