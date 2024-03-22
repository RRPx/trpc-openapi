"use strict";
var ClientWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumGenderNullableFilter_1 = require("../inputs/EnumGenderNullableFilter");
const FavoriteListRelationFilter_1 = require("../inputs/FavoriteListRelationFilter");
const NotificationListRelationFilter_1 = require("../inputs/NotificationListRelationFilter");
const ReservationListRelationFilter_1 = require("../inputs/ReservationListRelationFilter");
const ReviewListRelationFilter_1 = require("../inputs/ReviewListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
let ClientWhereInput = exports.ClientWhereInput = ClientWhereInput_1 = class ClientWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClientWhereInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumGenderNullableFilter_1.EnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumGenderNullableFilter_1.EnumGenderNullableFilter)
], ClientWhereInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ClientWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], ClientWhereInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteListRelationFilter_1.FavoriteListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteListRelationFilter_1.FavoriteListRelationFilter)
], ClientWhereInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationListRelationFilter_1.ReservationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationListRelationFilter_1.ReservationListRelationFilter)
], ClientWhereInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewListRelationFilter_1.ReviewListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewListRelationFilter_1.ReviewListRelationFilter)
], ClientWhereInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationListRelationFilter_1.NotificationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationListRelationFilter_1.NotificationListRelationFilter)
], ClientWhereInput.prototype, "notification", void 0);
exports.ClientWhereInput = ClientWhereInput = ClientWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientWhereInput", {})
], ClientWhereInput);
