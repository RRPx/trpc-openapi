"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutReviewInput_1 = require("../inputs/CastCreateNestedOneWithoutReviewInput");
const ClientCreateNestedOneWithoutReviewInput_1 = require("../inputs/ClientCreateNestedOneWithoutReviewInput");
const Approval_1 = require("../../enums/Approval");
let ReviewCreateInput = exports.ReviewCreateInput = class ReviewCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutReviewInput_1.CastCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutReviewInput_1.CastCreateNestedOneWithoutReviewInput)
], ReviewCreateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReviewInput_1.ClientCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReviewInput_1.ClientCreateNestedOneWithoutReviewInput)
], ReviewCreateInput.prototype, "client", void 0);
exports.ReviewCreateInput = ReviewCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateInput", {})
], ReviewCreateInput);
