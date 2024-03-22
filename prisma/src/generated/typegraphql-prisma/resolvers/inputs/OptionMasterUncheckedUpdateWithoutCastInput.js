"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedUpdateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutOption_idNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OptionMasterUncheckedUpdateWithoutCastInput = class OptionMasterUncheckedUpdateWithoutCastInput {
};
exports.OptionMasterUncheckedUpdateWithoutCastInput = OptionMasterUncheckedUpdateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1.ReservationUncheckedUpdateManyWithoutOption_idNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1.ReservationUncheckedUpdateManyWithoutOption_idNestedInput)
], OptionMasterUncheckedUpdateWithoutCastInput.prototype, "reservation", void 0);
exports.OptionMasterUncheckedUpdateWithoutCastInput = OptionMasterUncheckedUpdateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedUpdateWithoutCastInput", {})
], OptionMasterUncheckedUpdateWithoutCastInput);
