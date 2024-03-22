"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumUserTypeFilter_1 = require("../inputs/EnumUserTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ChatMessageScalarWhereInput = class ChatMessageScalarWhereInput {
};
exports.ChatMessageScalarWhereInput = ChatMessageScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatMessageScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatMessageScalarWhereInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ChatMessageScalarWhereInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageScalarWhereInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ChatMessageScalarWhereInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeFilter_1.EnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeFilter_1.EnumUserTypeFilter)
], ChatMessageScalarWhereInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatMessageScalarWhereInput.prototype, "updated_at", void 0);
exports.ChatMessageScalarWhereInput = ChatMessageScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageScalarWhereInput", {})
], ChatMessageScalarWhereInput);
