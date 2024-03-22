"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutReviewInput_1 = require("../inputs/ClientCreateNestedOneWithoutReviewInput");
const Approval_1 = require("../../enums/Approval");
let ReviewCreateWithoutCastInput = class ReviewCreateWithoutCastInput {
};
exports.ReviewCreateWithoutCastInput = ReviewCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCastInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCastInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCastInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCastInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReviewInput_1.ClientCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReviewInput_1.ClientCreateNestedOneWithoutReviewInput)
], ReviewCreateWithoutCastInput.prototype, "client", void 0);
exports.ReviewCreateWithoutCastInput = ReviewCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateWithoutCastInput", {})
], ReviewCreateWithoutCastInput);
