"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateManyChat_roomInputEnvelope_1 = require("../inputs/ChatMessageCreateManyChat_roomInputEnvelope");
const ChatMessageCreateOrConnectWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateOrConnectWithoutChat_roomInput");
const ChatMessageCreateWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateWithoutChat_roomInput");
const ChatMessageWhereUniqueInput_1 = require("../inputs/ChatMessageWhereUniqueInput");
let ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput = class ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput {
};
exports.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput = ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateWithoutChat_roomInput_1.ChatMessageCreateWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutChat_roomInput_1.ChatMessageCreateOrConnectWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCreateManyChat_roomInputEnvelope_1.ChatMessageCreateManyChat_roomInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCreateManyChat_roomInputEnvelope_1.ChatMessageCreateManyChat_roomInputEnvelope)
], ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput.prototype, "connect", void 0);
exports.ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput = ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput", {})
], ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput);
