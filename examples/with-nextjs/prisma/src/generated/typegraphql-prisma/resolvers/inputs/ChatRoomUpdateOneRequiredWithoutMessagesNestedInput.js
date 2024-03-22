"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateOrConnectWithoutMessagesInput_1 = require("../inputs/ChatRoomCreateOrConnectWithoutMessagesInput");
const ChatRoomUncheckedCreateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedCreateWithoutMessagesInput");
const ChatRoomUncheckedUpdateWithoutMessagesInput_1 = require("../inputs/ChatRoomUncheckedUpdateWithoutMessagesInput");
const ChatRoomUpsertWithoutMessagesInput_1 = require("../inputs/ChatRoomUpsertWithoutMessagesInput");
const ChatRoomWhereUniqueInput_1 = require("../inputs/ChatRoomWhereUniqueInput");
let ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = exports.ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = class ChatRoomUpdateOneRequiredWithoutMessagesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateWithoutMessagesInput_1.ChatRoomUncheckedCreateWithoutMessagesInput)
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutMessagesInput_1.ChatRoomCreateOrConnectWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateOrConnectWithoutMessagesInput_1.ChatRoomCreateOrConnectWithoutMessagesInput)
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUpsertWithoutMessagesInput_1.ChatRoomUpsertWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUpsertWithoutMessagesInput_1.ChatRoomUpsertWithoutMessagesInput)
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateWithoutMessagesInput_1.ChatRoomUncheckedUpdateWithoutMessagesInput)
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput.prototype, "update", void 0);
exports.ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUpdateOneRequiredWithoutMessagesNestedInput", {})
], ChatRoomUpdateOneRequiredWithoutMessagesNestedInput);
