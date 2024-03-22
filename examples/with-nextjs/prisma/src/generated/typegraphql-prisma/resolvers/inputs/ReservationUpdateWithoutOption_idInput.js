"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/AddressUpdateOneRequiredWithoutReservationNestedInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/CastUpdateOneRequiredWithoutReservationNestedInput");
const ChatRoomUpdateOneWithoutReservationNestedInput_1 = require("../inputs/ChatRoomUpdateOneWithoutReservationNestedInput");
const ClientUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/ClientUpdateOneRequiredWithoutReservationNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ShiftManagementUpdateManyWithoutReservationNestedInput_1 = require("../inputs/ShiftManagementUpdateManyWithoutReservationNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReservationUpdateWithoutOption_idInput = exports.ReservationUpdateWithoutOption_idInput = class ReservationUpdateWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutOption_idInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutOption_idInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutOption_idInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput)
], ReservationUpdateWithoutOption_idInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUpdateOneWithoutReservationNestedInput_1.ChatRoomUpdateOneWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUpdateOneWithoutReservationNestedInput_1.ChatRoomUpdateOneWithoutReservationNestedInput)
], ReservationUpdateWithoutOption_idInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutReservationNestedInput_1.AddressUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateOneRequiredWithoutReservationNestedInput_1.AddressUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutOption_idInput.prototype, "address", void 0);
exports.ReservationUpdateWithoutOption_idInput = ReservationUpdateWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithoutOption_idInput", {})
], ReservationUpdateWithoutOption_idInput);
