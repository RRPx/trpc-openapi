"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserRankResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyUserRankArgs_1 = require("./args/CreateManyUserRankArgs");
const UserRank_1 = require("../../../models/UserRank");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyUserRankResolver = class CreateManyUserRankResolver {
    async createManyUserRank(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyUserRankResolver = CreateManyUserRankResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUserRankArgs_1.CreateManyUserRankArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyUserRankResolver.prototype, "createManyUserRank", null);
exports.CreateManyUserRankResolver = CreateManyUserRankResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], CreateManyUserRankResolver);
