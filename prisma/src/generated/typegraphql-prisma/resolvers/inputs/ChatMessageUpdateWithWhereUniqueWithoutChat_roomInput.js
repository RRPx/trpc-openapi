"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedUpdateWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedUpdateWithoutChat_roomInput");
const ChatMessageWhereUniqueInput_1 = require("../inputs/ChatMessageWhereUniqueInput");
let ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput = class ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput {
};
exports.ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput = ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateWithoutChat_roomInput_1.ChatMessageUncheckedUpdateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateWithoutChat_roomInput_1.ChatMessageUncheckedUpdateWithoutChat_roomInput)
], ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput.prototype, "data", void 0);
exports.ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput = ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput", {})
], ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput);
