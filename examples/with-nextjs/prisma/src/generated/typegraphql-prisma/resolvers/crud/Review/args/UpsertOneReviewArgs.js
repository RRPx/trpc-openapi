"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateInput_1 = require("../../../inputs/ReviewUncheckedCreateInput");
const ReviewUncheckedUpdateInput_1 = require("../../../inputs/ReviewUncheckedUpdateInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let UpsertOneReviewArgs = exports.UpsertOneReviewArgs = class UpsertOneReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], UpsertOneReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateInput_1.ReviewUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateInput_1.ReviewUncheckedCreateInput)
], UpsertOneReviewArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateInput_1.ReviewUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateInput_1.ReviewUncheckedUpdateInput)
], UpsertOneReviewArgs.prototype, "update", void 0);
exports.UpsertOneReviewArgs = UpsertOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReviewArgs);
