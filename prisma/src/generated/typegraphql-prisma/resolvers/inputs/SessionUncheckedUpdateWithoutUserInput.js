"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SessionUncheckedUpdateWithoutUserInput = class SessionUncheckedUpdateWithoutUserInput {
};
exports.SessionUncheckedUpdateWithoutUserInput = SessionUncheckedUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUncheckedUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUncheckedUpdateWithoutUserInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SessionUncheckedUpdateWithoutUserInput.prototype, "expires", void 0);
exports.SessionUncheckedUpdateWithoutUserInput = SessionUncheckedUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUncheckedUpdateWithoutUserInput", {})
], SessionUncheckedUpdateWithoutUserInput);
