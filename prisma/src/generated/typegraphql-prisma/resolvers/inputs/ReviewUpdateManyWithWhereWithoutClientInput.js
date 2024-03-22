"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUncheckedUpdateManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedUpdateManyWithoutClientInput");
let ReviewUpdateManyWithWhereWithoutClientInput = class ReviewUpdateManyWithWhereWithoutClientInput {
};
exports.ReviewUpdateManyWithWhereWithoutClientInput = ReviewUpdateManyWithWhereWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewScalarWhereInput_1.ReviewScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewScalarWhereInput_1.ReviewScalarWhereInput)
], ReviewUpdateManyWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyWithoutClientInput_1.ReviewUncheckedUpdateManyWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyWithoutClientInput_1.ReviewUncheckedUpdateManyWithoutClientInput)
], ReviewUpdateManyWithWhereWithoutClientInput.prototype, "data", void 0);
exports.ReviewUpdateManyWithWhereWithoutClientInput = ReviewUpdateManyWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithWhereWithoutClientInput", {})
], ReviewUpdateManyWithWhereWithoutClientInput);
