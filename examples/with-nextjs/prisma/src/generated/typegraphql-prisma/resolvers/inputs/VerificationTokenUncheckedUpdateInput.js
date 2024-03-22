"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let VerificationTokenUncheckedUpdateInput = exports.VerificationTokenUncheckedUpdateInput = class VerificationTokenUncheckedUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VerificationTokenUncheckedUpdateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VerificationTokenUncheckedUpdateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VerificationTokenUncheckedUpdateInput.prototype, "expires", void 0);
exports.VerificationTokenUncheckedUpdateInput = VerificationTokenUncheckedUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VerificationTokenUncheckedUpdateInput", {})
], VerificationTokenUncheckedUpdateInput);
