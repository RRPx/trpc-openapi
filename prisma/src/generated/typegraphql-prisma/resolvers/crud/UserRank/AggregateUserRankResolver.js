"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserRankArgs_1 = require("./args/AggregateUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const AggregateUserRank_1 = require("../../outputs/AggregateUserRank");
const helpers_1 = require("../../../helpers");
let AggregateUserRankResolver = class AggregateUserRankResolver {
    async aggregateUserRank(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateUserRankResolver = AggregateUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUserRank_1.AggregateUserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserRankArgs_1.AggregateUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUserRankResolver.prototype, "aggregateUserRank", null);
exports.AggregateUserRankResolver = AggregateUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], AggregateUserRankResolver);
