"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUpdateManyWithWhereWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageScalarWhereInput_1 = require("../inputs/ChatMessageScalarWhereInput");
const ChatMessageUncheckedUpdateManyWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedUpdateManyWithoutChat_roomInput");
let ChatMessageUpdateManyWithWhereWithoutChat_roomInput = exports.ChatMessageUpdateManyWithWhereWithoutChat_roomInput = class ChatMessageUpdateManyWithWhereWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageScalarWhereInput_1.ChatMessageScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageScalarWhereInput_1.ChatMessageScalarWhereInput)
], ChatMessageUpdateManyWithWhereWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateManyWithoutChat_roomInput_1.ChatMessageUncheckedUpdateManyWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateManyWithoutChat_roomInput_1.ChatMessageUncheckedUpdateManyWithoutChat_roomInput)
], ChatMessageUpdateManyWithWhereWithoutChat_roomInput.prototype, "data", void 0);
exports.ChatMessageUpdateManyWithWhereWithoutChat_roomInput = ChatMessageUpdateManyWithWhereWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUpdateManyWithWhereWithoutChat_roomInput", {})
], ChatMessageUpdateManyWithWhereWithoutChat_roomInput);
