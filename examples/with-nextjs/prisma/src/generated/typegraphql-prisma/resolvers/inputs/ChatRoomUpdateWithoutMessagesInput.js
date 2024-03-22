"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpdateWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1 = require("../inputs/ReservationUpdateOneRequiredWithoutChat_roomNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChatRoomUpdateWithoutMessagesInput = exports.ChatRoomUpdateWithoutMessagesInput = class ChatRoomUpdateWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatRoomUpdateWithoutMessagesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUpdateWithoutMessagesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUpdateWithoutMessagesInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1.ReservationUpdateOneRequiredWithoutChat_roomNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1.ReservationUpdateOneRequiredWithoutChat_roomNestedInput)
], ChatRoomUpdateWithoutMessagesInput.prototype, "reservation", void 0);
exports.ChatRoomUpdateWithoutMessagesInput = ChatRoomUpdateWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpdateWithoutMessagesInput", {})
], ChatRoomUpdateWithoutMessagesInput);
