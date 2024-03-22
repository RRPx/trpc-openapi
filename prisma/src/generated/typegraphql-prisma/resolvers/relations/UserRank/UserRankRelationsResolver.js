"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const UserRank_1 = require("../../../models/UserRank");
const UserRankCastArgs_1 = require("./args/UserRankCastArgs");
const helpers_1 = require("../../../helpers");
let UserRankRelationsResolver = class UserRankRelationsResolver {
    async cast(userRank, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userRank.findUniqueOrThrow({
            where: {
                id: userRank.id,
            },
        }).cast({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserRankRelationsResolver = UserRankRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Cast_1.Cast], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserRank_1.UserRank, Object, Object, UserRankCastArgs_1.UserRankCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRankRelationsResolver.prototype, "cast", null);
exports.UserRankRelationsResolver = UserRankRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserRank_1.UserRank)
], UserRankRelationsResolver);
