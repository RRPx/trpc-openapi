"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedUpdateWithoutCastInput_1 = require("../inputs/ReviewUncheckedUpdateWithoutCastInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateWithWhereUniqueWithoutCastInput = class ReviewUpdateWithWhereUniqueWithoutCastInput {
};
exports.ReviewUpdateWithWhereUniqueWithoutCastInput = ReviewUpdateWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateWithoutCastInput_1.ReviewUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateWithoutCastInput_1.ReviewUncheckedUpdateWithoutCastInput)
], ReviewUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.ReviewUpdateWithWhereUniqueWithoutCastInput = ReviewUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutCastInput", {})
], ReviewUpdateWithWhereUniqueWithoutCastInput);
