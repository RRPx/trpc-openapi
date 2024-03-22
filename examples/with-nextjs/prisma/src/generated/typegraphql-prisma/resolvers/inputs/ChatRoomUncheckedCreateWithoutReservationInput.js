"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUncheckedCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput");
let ChatRoomUncheckedCreateWithoutReservationInput = exports.ChatRoomUncheckedCreateWithoutReservationInput = class ChatRoomUncheckedCreateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomUncheckedCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput)
], ChatRoomUncheckedCreateWithoutReservationInput.prototype, "messages", void 0);
exports.ChatRoomUncheckedCreateWithoutReservationInput = ChatRoomUncheckedCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUncheckedCreateWithoutReservationInput", {})
], ChatRoomUncheckedCreateWithoutReservationInput);
