"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneRequiredWithoutShift_managementNestedInput_1 = require("../inputs/CastUpdateOneRequiredWithoutShift_managementNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumCastSideReservationStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumCastSideReservationStatusFieldUpdateOperationsInput");
const EnumClientSideSlotStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumClientSideSlotStatusFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ShiftManagementUpdateWithoutReservationInput = exports.ShiftManagementUpdateWithoutReservationInput = class ShiftManagementUpdateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCastSideReservationStatusFieldUpdateOperationsInput_1.EnumCastSideReservationStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCastSideReservationStatusFieldUpdateOperationsInput_1.EnumCastSideReservationStatusFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumClientSideSlotStatusFieldUpdateOperationsInput_1.EnumClientSideSlotStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumClientSideSlotStatusFieldUpdateOperationsInput_1.EnumClientSideSlotStatusFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneRequiredWithoutShift_managementNestedInput_1.CastUpdateOneRequiredWithoutShift_managementNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneRequiredWithoutShift_managementNestedInput_1.CastUpdateOneRequiredWithoutShift_managementNestedInput)
], ShiftManagementUpdateWithoutReservationInput.prototype, "cast", void 0);
exports.ShiftManagementUpdateWithoutReservationInput = ShiftManagementUpdateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateWithoutReservationInput", {})
], ShiftManagementUpdateWithoutReservationInput);
