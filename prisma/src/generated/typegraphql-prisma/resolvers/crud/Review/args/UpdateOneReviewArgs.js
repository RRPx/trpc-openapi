"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedUpdateInput_1 = require("../../../inputs/ReviewUncheckedUpdateInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let UpdateOneReviewArgs = class UpdateOneReviewArgs {
};
exports.UpdateOneReviewArgs = UpdateOneReviewArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateInput_1.ReviewUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateInput_1.ReviewUncheckedUpdateInput)
], UpdateOneReviewArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], UpdateOneReviewArgs.prototype, "where", void 0);
exports.UpdateOneReviewArgs = UpdateOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReviewArgs);
