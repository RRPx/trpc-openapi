"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedUpdateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUncheckedUpdateManyWithoutOption_masterNestedInput_1 = require("../inputs/CastUncheckedUpdateManyWithoutOption_masterNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OptionMasterUncheckedUpdateWithoutReservationInput = exports.OptionMasterUncheckedUpdateWithoutReservationInput = class OptionMasterUncheckedUpdateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateManyWithoutOption_masterNestedInput_1.CastUncheckedUpdateManyWithoutOption_masterNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateManyWithoutOption_masterNestedInput_1.CastUncheckedUpdateManyWithoutOption_masterNestedInput)
], OptionMasterUncheckedUpdateWithoutReservationInput.prototype, "cast", void 0);
exports.OptionMasterUncheckedUpdateWithoutReservationInput = OptionMasterUncheckedUpdateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedUpdateWithoutReservationInput", {})
], OptionMasterUncheckedUpdateWithoutReservationInput);
