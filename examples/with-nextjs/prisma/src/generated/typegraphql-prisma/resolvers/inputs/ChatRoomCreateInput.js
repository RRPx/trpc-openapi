"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateNestedManyWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateNestedManyWithoutChat_roomInput");
const ReservationCreateNestedOneWithoutChat_roomInput_1 = require("../inputs/ReservationCreateNestedOneWithoutChat_roomInput");
let ChatRoomCreateInput = exports.ChatRoomCreateInput = class ChatRoomCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedOneWithoutChat_roomInput_1.ReservationCreateNestedOneWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedOneWithoutChat_roomInput_1.ReservationCreateNestedOneWithoutChat_roomInput)
], ChatRoomCreateInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCreateNestedManyWithoutChat_roomInput_1.ChatMessageCreateNestedManyWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCreateNestedManyWithoutChat_roomInput_1.ChatMessageCreateNestedManyWithoutChat_roomInput)
], ChatRoomCreateInput.prototype, "messages", void 0);
exports.ChatRoomCreateInput = ChatRoomCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateInput", {})
], ChatRoomCreateInput);
