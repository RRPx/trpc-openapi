"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpsertWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutReservationInput");
const ChatRoomUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutReservationInput");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
let ChatRoomUpsertWithoutReservationInput = class ChatRoomUpsertWithoutReservationInput {
};
exports.ChatRoomUpsertWithoutReservationInput = ChatRoomUpsertWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput)
], ChatRoomUpsertWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput)
], ChatRoomUpsertWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUpsertWithoutReservationInput.prototype, "where", void 0);
exports.ChatRoomUpsertWithoutReservationInput = ChatRoomUpsertWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpsertWithoutReservationInput", {})
], ChatRoomUpsertWithoutReservationInput);
