"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumGenderNullableFilter_1 = require("../inputs/EnumGenderNullableFilter");
const FavoriteListRelationFilter_1 = require("../inputs/FavoriteListRelationFilter");
const NotificationListRelationFilter_1 = require("../inputs/NotificationListRelationFilter");
const ReservationListRelationFilter_1 = require("../inputs/ReservationListRelationFilter");
const ReviewListRelationFilter_1 = require("../inputs/ReviewListRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
let ClientWhereUniqueInput = exports.ClientWhereUniqueInput = class ClientWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClientWhereUniqueInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumGenderNullableFilter_1.EnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumGenderNullableFilter_1.EnumGenderNullableFilter)
], ClientWhereUniqueInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereUniqueInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ClientWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], ClientWhereUniqueInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteListRelationFilter_1.FavoriteListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteListRelationFilter_1.FavoriteListRelationFilter)
], ClientWhereUniqueInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationListRelationFilter_1.ReservationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationListRelationFilter_1.ReservationListRelationFilter)
], ClientWhereUniqueInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewListRelationFilter_1.ReviewListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewListRelationFilter_1.ReviewListRelationFilter)
], ClientWhereUniqueInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationListRelationFilter_1.NotificationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationListRelationFilter_1.NotificationListRelationFilter)
], ClientWhereUniqueInput.prototype, "notification", void 0);
exports.ClientWhereUniqueInput = ClientWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientWhereUniqueInput", {})
], ClientWhereUniqueInput);
