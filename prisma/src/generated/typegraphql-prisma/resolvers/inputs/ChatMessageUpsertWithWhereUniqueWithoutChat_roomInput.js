"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedCreateWithoutChat_roomInput");
const ChatMessageUncheckedUpdateWithoutChat_roomInput_1 = require("../inputs/ChatMessageUncheckedUpdateWithoutChat_roomInput");
const ChatMessageWhereUniqueInput_1 = require("../inputs/ChatMessageWhereUniqueInput");
let ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput = class ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput {
};
exports.ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput = ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateWithoutChat_roomInput_1.ChatMessageUncheckedUpdateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateWithoutChat_roomInput_1.ChatMessageUncheckedUpdateWithoutChat_roomInput)
], ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateWithoutChat_roomInput_1.ChatMessageUncheckedCreateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateWithoutChat_roomInput_1.ChatMessageUncheckedCreateWithoutChat_roomInput)
], ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput.prototype, "create", void 0);
exports.ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput = ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput", {})
], ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput);
