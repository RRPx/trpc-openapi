"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const ChatMessageWhereInput_1 = require("../inputs/ChatMessageWhereInput");
const ChatRoomRelationFilter_1 = require("../inputs/ChatRoomRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumUserTypeFilter_1 = require("../inputs/EnumUserTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ChatMessageWhereUniqueInput = class ChatMessageWhereUniqueInput {
};
exports.ChatMessageWhereUniqueInput = ChatMessageWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput_1.ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput_1.ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageWhereInput_1.ChatMessageWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatMessageWhereUniqueInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ChatMessageWhereUniqueInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageWhereUniqueInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageWhereUniqueInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeFilter_1.EnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeFilter_1.EnumUserTypeFilter)
], ChatMessageWhereUniqueInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomRelationFilter_1.ChatRoomRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomRelationFilter_1.ChatRoomRelationFilter)
], ChatMessageWhereUniqueInput.prototype, "chat_room", void 0);
exports.ChatMessageWhereUniqueInput = ChatMessageWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageWhereUniqueInput", {})
], ChatMessageWhereUniqueInput);
