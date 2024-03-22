"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateNestedOneWithoutMessagesInput_1 = require("../inputs/ChatRoomCreateNestedOneWithoutMessagesInput");
const UserType_1 = require("../../enums/UserType");
let ChatMessageCreateInput = exports.ChatMessageCreateInput = class ChatMessageCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageCreateInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageCreateInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageCreateInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageCreateInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutMessagesInput_1.ChatRoomCreateNestedOneWithoutMessagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateNestedOneWithoutMessagesInput_1.ChatRoomCreateNestedOneWithoutMessagesInput)
], ChatMessageCreateInput.prototype, "chat_room", void 0);
exports.ChatMessageCreateInput = ChatMessageCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageCreateInput", {})
], ChatMessageCreateInput);
