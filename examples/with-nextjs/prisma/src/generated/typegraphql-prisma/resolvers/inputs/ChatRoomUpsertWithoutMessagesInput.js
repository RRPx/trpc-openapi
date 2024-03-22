"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpsertWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutMessagesInput");
const ChatRoomUncheckedUpdateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutMessagesInput");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
let ChatRoomUpsertWithoutMessagesInput = exports.ChatRoomUpsertWithoutMessagesInput = class ChatRoomUpsertWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput)
], ChatRoomUpsertWithoutMessagesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput)
], ChatRoomUpsertWithoutMessagesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomUpsertWithoutMessagesInput.prototype, "where", void 0);
exports.ChatRoomUpsertWithoutMessagesInput = ChatRoomUpsertWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpsertWithoutMessagesInput", {})
], ChatRoomUpsertWithoutMessagesInput);
