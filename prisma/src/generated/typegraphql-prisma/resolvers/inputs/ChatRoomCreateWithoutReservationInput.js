"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateNestedManyWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateNestedManyWithoutChat_roomInput");
let ChatRoomCreateWithoutReservationInput = class ChatRoomCreateWithoutReservationInput {
};
exports.ChatRoomCreateWithoutReservationInput = ChatRoomCreateWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCreateNestedManyWithoutChat_roomInput_1.ChatMessageCreateNestedManyWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCreateNestedManyWithoutChat_roomInput_1.ChatMessageCreateNestedManyWithoutChat_roomInput)
], ChatRoomCreateWithoutReservationInput.prototype, "messages", void 0);
exports.ChatRoomCreateWithoutReservationInput = ChatRoomCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateWithoutReservationInput", {})
], ChatRoomCreateWithoutReservationInput);
