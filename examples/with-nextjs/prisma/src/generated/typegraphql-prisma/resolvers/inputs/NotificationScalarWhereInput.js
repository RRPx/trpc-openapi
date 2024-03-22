"use strict";
var NotificationScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumCategoryNullableFilter_1 = require("../inputs/EnumCategoryNullableFilter");
const EnumTargetedUserFilter_1 = require("../inputs/EnumTargetedUserFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let NotificationScalarWhereInput = exports.NotificationScalarWhereInput = NotificationScalarWhereInput_1 = class NotificationScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCategoryNullableFilter_1.EnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCategoryNullableFilter_1.EnumCategoryNullableFilter)
], NotificationScalarWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationScalarWhereInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationScalarWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], NotificationScalarWhereInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTargetedUserFilter_1.EnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTargetedUserFilter_1.EnumTargetedUserFilter)
], NotificationScalarWhereInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationScalarWhereInput.prototype, "updated_at", void 0);
exports.NotificationScalarWhereInput = NotificationScalarWhereInput = NotificationScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationScalarWhereInput", {})
], NotificationScalarWhereInput);
