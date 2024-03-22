"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/ReviewUncheckedUpdateManyWithoutCastInput");
let ReviewUpdateManyWithWhereWithoutCastInput = class ReviewUpdateManyWithWhereWithoutCastInput {
};
exports.ReviewUpdateManyWithWhereWithoutCastInput = ReviewUpdateManyWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewScalarWhereInput_1.ReviewScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewScalarWhereInput_1.ReviewScalarWhereInput)
], ReviewUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyWithoutCastInput_1.ReviewUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyWithoutCastInput_1.ReviewUncheckedUpdateManyWithoutCastInput)
], ReviewUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.ReviewUpdateManyWithWhereWithoutCastInput = ReviewUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithWhereWithoutCastInput", {})
], ReviewUpdateManyWithWhereWithoutCastInput);
