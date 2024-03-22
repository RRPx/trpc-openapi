"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumApprovalFilter_1 = require("../inputs/EnumApprovalFilter");
const EnumCosplayContentNullableListFilter_1 = require("../inputs/EnumCosplayContentNullableListFilter");
const EnumCupNumberNullableFilter_1 = require("../inputs/EnumCupNumberNullableFilter");
const EnumLanguageTypeNullableListFilter_1 = require("../inputs/EnumLanguageTypeNullableListFilter");
const EnumPriorityOrderNullableFilter_1 = require("../inputs/EnumPriorityOrderNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CastScalarWhereInput = class CastScalarWhereInput {
};
exports.CastScalarWhereInput = CastScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastScalarWhereInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CastScalarWhereInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter)
], CastScalarWhereInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], CastScalarWhereInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter)
], CastScalarWhereInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCupNumberNullableFilter_1.EnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCupNumberNullableFilter_1.EnumCupNumberNullableFilter)
], CastScalarWhereInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CastScalarWhereInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], CastScalarWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityOrderNullableFilter_1.EnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityOrderNullableFilter_1.EnumPriorityOrderNullableFilter)
], CastScalarWhereInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], CastScalarWhereInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CastScalarWhereInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CastScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CastScalarWhereInput.prototype, "updated_at", void 0);
exports.CastScalarWhereInput = CastScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastScalarWhereInput", {})
], CastScalarWhereInput);
