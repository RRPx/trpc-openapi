"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/AddressUpdateOneRequiredWithoutReservationNestedInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/CastUpdateOneRequiredWithoutReservationNestedInput");
const ClientUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/ClientUpdateOneRequiredWithoutReservationNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OptionMasterUpdateManyWithoutReservationNestedInput_1 = require("../inputs/OptionMasterUpdateManyWithoutReservationNestedInput");
const ShiftManagementUpdateManyWithoutReservationNestedInput_1 = require("../inputs/ShiftManagementUpdateManyWithoutReservationNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReservationUpdateWithoutChat_roomInput = exports.ReservationUpdateWithoutChat_roomInput = class ReservationUpdateWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUpdateManyWithoutReservationNestedInput_1.OptionMasterUpdateManyWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUpdateManyWithoutReservationNestedInput_1.OptionMasterUpdateManyWithoutReservationNestedInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutReservationNestedInput_1.AddressUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateOneRequiredWithoutReservationNestedInput_1.AddressUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutChat_roomInput.prototype, "address", void 0);
exports.ReservationUpdateWithoutChat_roomInput = ReservationUpdateWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithoutChat_roomInput", {})
], ReservationUpdateWithoutChat_roomInput);
