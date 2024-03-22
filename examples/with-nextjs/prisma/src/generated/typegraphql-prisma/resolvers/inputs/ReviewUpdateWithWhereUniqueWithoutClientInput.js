"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedUpdateWithoutClientInput_1 = require("../inputs/ReviewUncheckedUpdateWithoutClientInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateWithWhereUniqueWithoutClientInput = exports.ReviewUpdateWithWhereUniqueWithoutClientInput = class ReviewUpdateWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateWithoutClientInput_1.ReviewUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateWithoutClientInput_1.ReviewUncheckedUpdateWithoutClientInput)
], ReviewUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.ReviewUpdateWithWhereUniqueWithoutClientInput = ReviewUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutClientInput", {})
], ReviewUpdateWithWhereUniqueWithoutClientInput);
