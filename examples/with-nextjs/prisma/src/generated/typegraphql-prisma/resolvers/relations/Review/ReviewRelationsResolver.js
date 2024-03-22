"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const Client_1 = require("../../../models/Client");
const Review_1 = require("../../../models/Review");
const helpers_1 = require("../../../helpers");
let ReviewRelationsResolver = exports.ReviewRelationsResolver = class ReviewRelationsResolver {
    async cast(review, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUniqueOrThrow({
            where: {
                id: review.id,
            },
        }).cast({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(review, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUniqueOrThrow({
            where: {
                id: review.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Review_1.Review, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewRelationsResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Review_1.Review, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewRelationsResolver.prototype, "client", null);
exports.ReviewRelationsResolver = ReviewRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], ReviewRelationsResolver);
