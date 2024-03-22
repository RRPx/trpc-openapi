"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedUpdateManyInput_1 = require("../../../inputs/ReviewUncheckedUpdateManyInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
let UpdateManyReviewArgs = class UpdateManyReviewArgs {
};
exports.UpdateManyReviewArgs = UpdateManyReviewArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyInput_1.ReviewUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyInput_1.ReviewUncheckedUpdateManyInput)
], UpdateManyReviewArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], UpdateManyReviewArgs.prototype, "where", void 0);
exports.UpdateManyReviewArgs = UpdateManyReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReviewArgs);
