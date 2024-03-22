"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolWithAggregatesFilter_1 = require("../inputs/BoolWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumUserTypeWithAggregatesFilter_1 = require("../inputs/EnumUserTypeWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ChatMessageScalarWhereWithAggregatesInput = class ChatMessageScalarWhereWithAggregatesInput {
};
exports.ChatMessageScalarWhereWithAggregatesInput = ChatMessageScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeWithAggregatesFilter_1.EnumUserTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeWithAggregatesFilter_1.EnumUserTypeWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ChatMessageScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
exports.ChatMessageScalarWhereWithAggregatesInput = ChatMessageScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageScalarWhereWithAggregatesInput", {})
], ChatMessageScalarWhereWithAggregatesInput);
