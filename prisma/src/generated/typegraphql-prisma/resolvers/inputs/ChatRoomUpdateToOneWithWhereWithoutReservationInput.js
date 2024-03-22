"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpdateToOneWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutReservationInput");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
let ChatRoomUpdateToOneWithWhereWithoutReservationInput = class ChatRoomUpdateToOneWithWhereWithoutReservationInput {
};
exports.ChatRoomUpdateToOneWithWhereWithoutReservationInput = ChatRoomUpdateToOneWithWhereWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUpdateToOneWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput)
], ChatRoomUpdateToOneWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.ChatRoomUpdateToOneWithWhereWithoutReservationInput = ChatRoomUpdateToOneWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpdateToOneWithWhereWithoutReservationInput", {})
], ChatRoomUpdateToOneWithWhereWithoutReservationInput);
