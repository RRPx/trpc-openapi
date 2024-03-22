"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByUserRankArgs_1 = require("./args/GroupByUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const UserRankGroupBy_1 = require("../../outputs/UserRankGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUserRankResolver = exports.GroupByUserRankResolver = class GroupByUserRankResolver {
    async groupByUserRank(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserRankGroupBy_1.UserRankGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserRankArgs_1.GroupByUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUserRankResolver.prototype, "groupByUserRank", null);
exports.GroupByUserRankResolver = GroupByUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], GroupByUserRankResolver);
