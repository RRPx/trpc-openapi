"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateOrConnectWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutMessagesInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomCreateOrConnectWithoutMessagesInput = exports.ChatRoomCreateOrConnectWithoutMessagesInput = class ChatRoomCreateOrConnectWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomCreateOrConnectWithoutMessagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput)
], ChatRoomCreateOrConnectWithoutMessagesInput.prototype, "create", void 0);
exports.ChatRoomCreateOrConnectWithoutMessagesInput = ChatRoomCreateOrConnectWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateOrConnectWithoutMessagesInput", {})
], ChatRoomCreateOrConnectWithoutMessagesInput);
