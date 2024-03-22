"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateNestedOneWithoutChat_roomInput_1 = require("../inputs/ReservationCreateNestedOneWithoutChat_roomInput");
let ChatRoomCreateWithoutMessagesInput = exports.ChatRoomCreateWithoutMessagesInput = class ChatRoomCreateWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCreateWithoutMessagesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateWithoutMessagesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateWithoutMessagesInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedOneWithoutChat_roomInput_1.ReservationCreateNestedOneWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedOneWithoutChat_roomInput_1.ReservationCreateNestedOneWithoutChat_roomInput)
], ChatRoomCreateWithoutMessagesInput.prototype, "reservation", void 0);
exports.ChatRoomCreateWithoutMessagesInput = ChatRoomCreateWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateWithoutMessagesInput", {})
], ChatRoomCreateWithoutMessagesInput);
