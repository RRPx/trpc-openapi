"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpdateToOneWithWhereWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedUpdateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutMessagesInput");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
let ChatRoomUpdateToOneWithWhereWithoutMessagesInput = class ChatRoomUpdateToOneWithWhereWithoutMessagesInput {
};
exports.ChatRoomUpdateToOneWithWhereWithoutMessagesInput = ChatRoomUpdateToOneWithWhereWithoutMessagesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUpdateToOneWithWhereWithoutMessagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput)
], ChatRoomUpdateToOneWithWhereWithoutMessagesInput.prototype, "data", void 0);
exports.ChatRoomUpdateToOneWithWhereWithoutMessagesInput = ChatRoomUpdateToOneWithWhereWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpdateToOneWithWhereWithoutMessagesInput", {})
], ChatRoomUpdateToOneWithWhereWithoutMessagesInput);
