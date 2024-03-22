"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateNestedOneWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateOrConnectWithoutReservationInput_1 = require("../inputs/ChatRoomCreateOrConnectWithoutReservationInput");
const ChatRoomUncheckedCreateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutReservationInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomCreateNestedOneWithoutReservationInput = class ChatRoomCreateNestedOneWithoutReservationInput {
};
exports.ChatRoomCreateNestedOneWithoutReservationInput = ChatRoomCreateNestedOneWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput)
], ChatRoomCreateNestedOneWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutReservationInput_1.ChatRoomCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateOrConnectWithoutReservationInput_1.ChatRoomCreateOrConnectWithoutReservationInput)
], ChatRoomCreateNestedOneWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomCreateNestedOneWithoutReservationInput.prototype, "connect", void 0);
exports.ChatRoomCreateNestedOneWithoutReservationInput = ChatRoomCreateNestedOneWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateNestedOneWithoutReservationInput", {})
], ChatRoomCreateNestedOneWithoutReservationInput);
