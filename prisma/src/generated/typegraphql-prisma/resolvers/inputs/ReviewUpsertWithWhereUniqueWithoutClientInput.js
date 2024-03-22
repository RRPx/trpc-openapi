"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateWithoutClientInput");
const ReviewUncheckedUpdateWithoutClientInput_1 = require("../inputs/ReviewUncheckedUpdateWithoutClientInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpsertWithWhereUniqueWithoutClientInput = class ReviewUpsertWithWhereUniqueWithoutClientInput {
};
exports.ReviewUpsertWithWhereUniqueWithoutClientInput = ReviewUpsertWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateWithoutClientInput_1.ReviewUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateWithoutClientInput_1.ReviewUncheckedUpdateWithoutClientInput)
], ReviewUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateWithoutClientInput_1.ReviewUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateWithoutClientInput_1.ReviewUncheckedCreateWithoutClientInput)
], ReviewUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.ReviewUpsertWithWhereUniqueWithoutClientInput = ReviewUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutClientInput", {})
], ReviewUpsertWithWhereUniqueWithoutClientInput);
