"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/CastUpdateOneRequiredWithoutReservationNestedInput");
const ChatRoomUpdateOneWithoutReservationNestedInput_1 = require("../inputs/ChatRoomUpdateOneWithoutReservationNestedInput");
const ClientUpdateOneRequiredWithoutReservationNestedInput_1 = require("../inputs/ClientUpdateOneRequiredWithoutReservationNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OptionMasterUpdateManyWithoutReservationNestedInput_1 = require("../inputs/OptionMasterUpdateManyWithoutReservationNestedInput");
const ShiftManagementUpdateManyWithoutReservationNestedInput_1 = require("../inputs/ShiftManagementUpdateManyWithoutReservationNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReservationUpdateWithoutAddressInput = class ReservationUpdateWithoutAddressInput {
};
exports.ReservationUpdateWithoutAddressInput = ReservationUpdateWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReservationUpdateWithoutAddressInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneRequiredWithoutReservationNestedInput_1.CastUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutAddressInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneRequiredWithoutReservationNestedInput_1.ClientUpdateOneRequiredWithoutReservationNestedInput)
], ReservationUpdateWithoutAddressInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUpdateManyWithoutReservationNestedInput_1.OptionMasterUpdateManyWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUpdateManyWithoutReservationNestedInput_1.OptionMasterUpdateManyWithoutReservationNestedInput)
], ReservationUpdateWithoutAddressInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUpdateManyWithoutReservationNestedInput_1.ShiftManagementUpdateManyWithoutReservationNestedInput)
], ReservationUpdateWithoutAddressInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUpdateOneWithoutReservationNestedInput_1.ChatRoomUpdateOneWithoutReservationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUpdateOneWithoutReservationNestedInput_1.ChatRoomUpdateOneWithoutReservationNestedInput)
], ReservationUpdateWithoutAddressInput.prototype, "chat_room", void 0);
exports.ReservationUpdateWithoutAddressInput = ReservationUpdateWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithoutAddressInput", {})
], ReservationUpdateWithoutAddressInput);
