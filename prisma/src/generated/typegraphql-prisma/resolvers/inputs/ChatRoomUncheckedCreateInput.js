"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput");
let ChatRoomUncheckedCreateInput = class ChatRoomUncheckedCreateInput {
};
exports.ChatRoomUncheckedCreateInput = ChatRoomUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomUncheckedCreateInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput_1.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput)
], ChatRoomUncheckedCreateInput.prototype, "messages", void 0);
exports.ChatRoomUncheckedCreateInput = ChatRoomUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUncheckedCreateInput", {})
], ChatRoomUncheckedCreateInput);
