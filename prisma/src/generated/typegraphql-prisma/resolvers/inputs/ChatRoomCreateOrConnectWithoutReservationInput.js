"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutReservationInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomCreateOrConnectWithoutReservationInput = class ChatRoomCreateOrConnectWithoutReservationInput {
};
exports.ChatRoomCreateOrConnectWithoutReservationInput = ChatRoomCreateOrConnectWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput)
], ChatRoomCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.ChatRoomCreateOrConnectWithoutReservationInput = ChatRoomCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateOrConnectWithoutReservationInput", {})
], ChatRoomCreateOrConnectWithoutReservationInput);
