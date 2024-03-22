"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastNullableRelationFilter_1 = require("../inputs/CastNullableRelationFilter");
const ClientNullableRelationFilter_1 = require("../inputs/ClientNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumCategoryNullableFilter_1 = require("../inputs/EnumCategoryNullableFilter");
const EnumTargetedUserFilter_1 = require("../inputs/EnumTargetedUserFilter");
const NotificationWhereInput_1 = require("../inputs/NotificationWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let NotificationWhereUniqueInput = class NotificationWhereUniqueInput {
};
exports.NotificationWhereUniqueInput = NotificationWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereInput_1.NotificationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereInput_1.NotificationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereInput_1.NotificationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCategoryNullableFilter_1.EnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCategoryNullableFilter_1.EnumCategoryNullableFilter)
], NotificationWhereUniqueInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationWhereUniqueInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationWhereUniqueInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], NotificationWhereUniqueInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationWhereUniqueInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTargetedUserFilter_1.EnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTargetedUserFilter_1.EnumTargetedUserFilter)
], NotificationWhereUniqueInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastNullableRelationFilter_1.CastNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastNullableRelationFilter_1.CastNullableRelationFilter)
], NotificationWhereUniqueInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientNullableRelationFilter_1.ClientNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientNullableRelationFilter_1.ClientNullableRelationFilter)
], NotificationWhereUniqueInput.prototype, "client", void 0);
exports.NotificationWhereUniqueInput = NotificationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationWhereUniqueInput", {})
], NotificationWhereUniqueInput);
