"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateWithoutCastInput_1 = require("../inputs/ReviewUncheckedCreateWithoutCastInput");
const ReviewUncheckedUpdateWithoutCastInput_1 = require("../inputs/ReviewUncheckedUpdateWithoutCastInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpsertWithWhereUniqueWithoutCastInput = exports.ReviewUpsertWithWhereUniqueWithoutCastInput = class ReviewUpsertWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateWithoutCastInput_1.ReviewUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateWithoutCastInput_1.ReviewUncheckedUpdateWithoutCastInput)
], ReviewUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateWithoutCastInput_1.ReviewUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateWithoutCastInput_1.ReviewUncheckedCreateWithoutCastInput)
], ReviewUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.ReviewUpsertWithWhereUniqueWithoutCastInput = ReviewUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutCastInput", {})
], ReviewUpsertWithWhereUniqueWithoutCastInput);
