"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUserRankArgs_1 = require("./args/UpdateOneUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const helpers_1 = require("../../../helpers");
let UpdateOneUserRankResolver = exports.UpdateOneUserRankResolver = class UpdateOneUserRankResolver {
    async updateOneUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserRank_1.UserRank, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserRankArgs_1.UpdateOneUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUserRankResolver.prototype, "updateOneUserRank", null);
exports.UpdateOneUserRankResolver = UpdateOneUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], UpdateOneUserRankResolver);
