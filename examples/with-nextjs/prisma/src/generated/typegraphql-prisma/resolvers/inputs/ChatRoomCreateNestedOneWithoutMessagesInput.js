"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateNestedOneWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateOrConnectWithoutMessagesInput_1 = require("../inputs/ChatRoomCreateOrConnectWithoutMessagesInput");
const ChatRoomUncheckedCreateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutMessagesInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomCreateNestedOneWithoutMessagesInput = exports.ChatRoomCreateNestedOneWithoutMessagesInput = class ChatRoomCreateNestedOneWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput)
], ChatRoomCreateNestedOneWithoutMessagesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutMessagesInput_1.ChatRoomCreateOrConnectWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateOrConnectWithoutMessagesInput_1.ChatRoomCreateOrConnectWithoutMessagesInput)
], ChatRoomCreateNestedOneWithoutMessagesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomCreateNestedOneWithoutMessagesInput.prototype, "connect", void 0);
exports.ChatRoomCreateNestedOneWithoutMessagesInput = ChatRoomCreateNestedOneWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateNestedOneWithoutMessagesInput", {})
], ChatRoomCreateNestedOneWithoutMessagesInput);
