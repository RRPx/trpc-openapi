"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/CastUpdateOneRequiredWithoutReviewNestedInput");
const ClientUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/ClientUpdateOneRequiredWithoutReviewNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReviewUpdateInput = class ReviewUpdateInput {
};
exports.ReviewUpdateInput = ReviewUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneRequiredWithoutReviewNestedInput_1.CastUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneRequiredWithoutReviewNestedInput_1.CastUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutReviewNestedInput_1.ClientUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneRequiredWithoutReviewNestedInput_1.ClientUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateInput.prototype, "client", void 0);
exports.ReviewUpdateInput = ReviewUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateInput", {})
], ReviewUpdateInput);
