"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReviewOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueReviewOrThrowArgs_1 = require("./args/FindUniqueReviewOrThrowArgs");
const Review_1 = require("../../../models/Review");
const helpers_1 = require("../../../helpers");
let FindUniqueReviewOrThrowResolver = exports.FindUniqueReviewOrThrowResolver = class FindUniqueReviewOrThrowResolver {
    async getReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewOrThrowArgs_1.FindUniqueReviewOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReviewOrThrowResolver.prototype, "getReview", null);
exports.FindUniqueReviewOrThrowResolver = FindUniqueReviewOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], FindUniqueReviewOrThrowResolver);
