"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const ChatRoomRelationFilter_1 = require("../inputs/ChatRoomRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumUserTypeFilter_1 = require("../inputs/EnumUserTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ChatMessageWhereInput = class ChatMessageWhereInput {
};
exports.ChatMessageWhereInput = ChatMessageWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatMessageWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatMessageWhereInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ChatMessageWhereInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageWhereInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageWhereInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeFilter_1.EnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeFilter_1.EnumUserTypeFilter)
], ChatMessageWhereInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomRelationFilter_1.ChatRoomRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomRelationFilter_1.ChatRoomRelationFilter)
], ChatMessageWhereInput.prototype, "chat_room", void 0);
exports.ChatMessageWhereInput = ChatMessageWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageWhereInput", {})
], ChatMessageWhereInput);
