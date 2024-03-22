"use strict";
var CastWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationListRelationFilter_1 = require("../inputs/BankInformationListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastInformationNullableRelationFilter_1 = require("../inputs/CastInformationNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumApprovalFilter_1 = require("../inputs/EnumApprovalFilter");
const EnumCosplayContentNullableListFilter_1 = require("../inputs/EnumCosplayContentNullableListFilter");
const EnumCupNumberNullableFilter_1 = require("../inputs/EnumCupNumberNullableFilter");
const EnumLanguageTypeNullableListFilter_1 = require("../inputs/EnumLanguageTypeNullableListFilter");
const EnumPriorityOrderNullableFilter_1 = require("../inputs/EnumPriorityOrderNullableFilter");
const FavoriteListRelationFilter_1 = require("../inputs/FavoriteListRelationFilter");
const NotificationListRelationFilter_1 = require("../inputs/NotificationListRelationFilter");
const OptionMasterListRelationFilter_1 = require("../inputs/OptionMasterListRelationFilter");
const ReservationListRelationFilter_1 = require("../inputs/ReservationListRelationFilter");
const ReviewListRelationFilter_1 = require("../inputs/ReviewListRelationFilter");
const ShiftManagementListRelationFilter_1 = require("../inputs/ShiftManagementListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
const UserRankRelationFilter_1 = require("../inputs/UserRankRelationFilter");
let CastWhereInput = exports.CastWhereInput = CastWhereInput_1 = class CastWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastWhereInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CastWhereInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter)
], CastWhereInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], CastWhereInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter)
], CastWhereInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCupNumberNullableFilter_1.EnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCupNumberNullableFilter_1.EnumCupNumberNullableFilter)
], CastWhereInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastWhereInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], CastWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityOrderNullableFilter_1.EnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityOrderNullableFilter_1.EnumPriorityOrderNullableFilter)
], CastWhereInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], CastWhereInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastWhereInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CastWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CastWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], CastWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankRelationFilter_1.UserRankRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankRelationFilter_1.UserRankRelationFilter)
], CastWhereInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteListRelationFilter_1.FavoriteListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteListRelationFilter_1.FavoriteListRelationFilter)
], CastWhereInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationListRelationFilter_1.NotificationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationListRelationFilter_1.NotificationListRelationFilter)
], CastWhereInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterListRelationFilter_1.OptionMasterListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterListRelationFilter_1.OptionMasterListRelationFilter)
], CastWhereInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter)
], CastWhereInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewListRelationFilter_1.ReviewListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewListRelationFilter_1.ReviewListRelationFilter)
], CastWhereInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationNullableRelationFilter_1.CastInformationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationNullableRelationFilter_1.CastInformationNullableRelationFilter)
], CastWhereInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationListRelationFilter_1.ReservationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationListRelationFilter_1.ReservationListRelationFilter)
], CastWhereInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationListRelationFilter_1.BankInformationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationListRelationFilter_1.BankInformationListRelationFilter)
], CastWhereInput.prototype, "bank_information", void 0);
exports.CastWhereInput = CastWhereInput = CastWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CastWhereInput", {})
], CastWhereInput);
