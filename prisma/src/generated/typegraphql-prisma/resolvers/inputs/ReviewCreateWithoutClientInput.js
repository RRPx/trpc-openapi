"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutReviewInput_1 = require("../inputs/CastCreateNestedOneWithoutReviewInput");
const Approval_1 = require("../../enums/Approval");
let ReviewCreateWithoutClientInput = class ReviewCreateWithoutClientInput {
};
exports.ReviewCreateWithoutClientInput = ReviewCreateWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutClientInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutClientInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutClientInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutClientInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateWithoutClientInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewCreateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutReviewInput_1.CastCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutReviewInput_1.CastCreateNestedOneWithoutReviewInput)
], ReviewCreateWithoutClientInput.prototype, "cast", void 0);
exports.ReviewCreateWithoutClientInput = ReviewCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateWithoutClientInput", {})
], ReviewCreateWithoutClientInput);
