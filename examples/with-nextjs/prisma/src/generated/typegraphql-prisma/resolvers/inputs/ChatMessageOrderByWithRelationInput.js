"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomOrderByWithRelationInput_1 = require("../inputs/ChatRoomOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChatMessageOrderByWithRelationInput = exports.ChatMessageOrderByWithRelationInput = class ChatMessageOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ChatMessageOrderByWithRelationInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput)
], ChatMessageOrderByWithRelationInput.prototype, "chat_room", void 0);
exports.ChatMessageOrderByWithRelationInput = ChatMessageOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageOrderByWithRelationInput", {})
], ChatMessageOrderByWithRelationInput);
