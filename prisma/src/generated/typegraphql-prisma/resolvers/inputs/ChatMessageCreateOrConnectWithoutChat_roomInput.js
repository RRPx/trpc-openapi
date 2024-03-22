"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageCreateOrConnectWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedCreateWithoutChat_roomInput");
const ChatMessageWhereUniqueInput_1 = require("../inputs/ChatMessageWhereUniqueInput");
let ChatMessageCreateOrConnectWithoutChat_roomInput = class ChatMessageCreateOrConnectWithoutChat_roomInput {
};
exports.ChatMessageCreateOrConnectWithoutChat_roomInput = ChatMessageCreateOrConnectWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], ChatMessageCreateOrConnectWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateWithoutChat_roomInput_1.ChatMessageUncheckedCreateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateWithoutChat_roomInput_1.ChatMessageUncheckedCreateWithoutChat_roomInput)
], ChatMessageCreateOrConnectWithoutChat_roomInput.prototype, "create", void 0);
exports.ChatMessageCreateOrConnectWithoutChat_roomInput = ChatMessageCreateOrConnectWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutChat_roomInput", {})
], ChatMessageCreateOrConnectWithoutChat_roomInput);
