"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUpdateManyWithoutChat_roomNestedInput_1 = require("../inputs/ChatMessageUpdateManyWithoutChat_roomNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1 = require("../inputs/ReservationUpdateOneRequiredWithoutChat_roomNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChatRoomUpdateInput = exports.ChatRoomUpdateInput = class ChatRoomUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatRoomUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatRoomUpdateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1.ReservationUpdateOneRequiredWithoutChat_roomNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateOneRequiredWithoutChat_roomNestedInput_1.ReservationUpdateOneRequiredWithoutChat_roomNestedInput)
], ChatRoomUpdateInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUpdateManyWithoutChat_roomNestedInput_1.ChatMessageUpdateManyWithoutChat_roomNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageUpdateManyWithoutChat_roomNestedInput_1.ChatMessageUpdateManyWithoutChat_roomNestedInput)
], ChatRoomUpdateInput.prototype, "messages", void 0);
exports.ChatRoomUpdateInput = ChatRoomUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpdateInput", {})
], ChatRoomUpdateInput);
