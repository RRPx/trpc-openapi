"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUncheckedUpdateOneWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateOrConnectWithoutReservationInput_1 = require("../inputs/ChatRoomCreateOrConnectWithoutReservationInput");
const ChatRoomUncheckedCreateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutReservationInput");
const ChatRoomUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutReservationInput");
const ChatRoomUpsertWithoutReservationInput_1 = require("../inputs/ChatRoomUpsertWithoutReservationInput");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomUncheckedUpdateOneWithoutReservationNestedInput = exports.ChatRoomUncheckedUpdateOneWithoutReservationNestedInput = class ChatRoomUncheckedUpdateOneWithoutReservationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutReservationInput_1.ChatRoomUncheckedCreateWithoutReservationInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutReservationInput_1.ChatRoomCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateOrConnectWithoutReservationInput_1.ChatRoomCreateOrConnectWithoutReservationInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUpsertWithoutReservationInput_1.ChatRoomUpsertWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUpsertWithoutReservationInput_1.ChatRoomUpsertWithoutReservationInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutReservationInput_1.ChatRoomUncheckedUpdateWithoutReservationInput)
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput.prototype, "update", void 0);
exports.ChatRoomUncheckedUpdateOneWithoutReservationNestedInput = ChatRoomUncheckedUpdateOneWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUncheckedUpdateOneWithoutReservationNestedInput", {})
], ChatRoomUncheckedUpdateOneWithoutReservationNestedInput);
