"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUpdateManyWithoutChat_roomNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateManyChat_roomInputEnvelope_1 = require("../inputs/ChatMessageCreateManyChat_roomInputEnvelope");
const ChatMessageCreateOrConnectWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateOrConnectWithoutChat_roomInput");
const ChatMessageCreateWithoutChat_roomInput_1 = require("../inputs/ChatMessageCreateWithoutChat_roomInput");
const ChatMessageScalarWhereInput_1 = require("../inputs/ChatMessageScalarWhereInput");
const ChatMessageUpdateManyWithWhereWithoutChat_roomInput_1 = require("../inputs/ChatMessageUpdateManyWithWhereWithoutChat_roomInput");
const ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput_1 = require("../inputs/ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput");
const ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput_1 = require("../inputs/ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput");
const ChatMessageWhereUniqueInput_1 = require("../inputs/ChatMessageWhereUniqueInput");
let ChatMessageUpdateManyWithoutChat_roomNestedInput = exports.ChatMessageUpdateManyWithoutChat_roomNestedInput = class ChatMessageUpdateManyWithoutChat_roomNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateWithoutChat_roomInput_1.ChatMessageCreateWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutChat_roomInput_1.ChatMessageCreateOrConnectWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput_1.ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCreateManyChat_roomInputEnvelope_1.ChatMessageCreateManyChat_roomInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCreateManyChat_roomInputEnvelope_1.ChatMessageCreateManyChat_roomInputEnvelope)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput_1.ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageUpdateManyWithWhereWithoutChat_roomInput_1.ChatMessageUpdateManyWithWhereWithoutChat_roomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput_1.ChatMessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageUpdateManyWithoutChat_roomNestedInput.prototype, "deleteMany", void 0);
exports.ChatMessageUpdateManyWithoutChat_roomNestedInput = ChatMessageUpdateManyWithoutChat_roomNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUpdateManyWithoutChat_roomNestedInput", {})
], ChatMessageUpdateManyWithoutChat_roomNestedInput);
