"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUncheckedUpdateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput_1 = require("../inputs/ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChatRoomUncheckedUpdateWithoutReservationInput = exports.ChatRoomUncheckedUpdateWithoutReservationInput = class ChatRoomUncheckedUpdateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatRoomUncheckedUpdateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUncheckedUpdateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUncheckedUpdateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput_1.ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput_1.ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput)
], ChatRoomUncheckedUpdateWithoutReservationInput.prototype, "messages", void 0);
exports.ChatRoomUncheckedUpdateWithoutReservationInput = ChatRoomUncheckedUpdateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUncheckedUpdateWithoutReservationInput", {})
], ChatRoomUncheckedUpdateWithoutReservationInput);
