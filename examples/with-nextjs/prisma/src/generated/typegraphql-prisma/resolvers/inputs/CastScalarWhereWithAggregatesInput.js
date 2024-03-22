"use strict";
var CastScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolWithAggregatesFilter_1 = require("../inputs/BoolWithAggregatesFilter");
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumApprovalWithAggregatesFilter_1 = require("../inputs/EnumApprovalWithAggregatesFilter");
const EnumCosplayContentNullableListFilter_1 = require("../inputs/EnumCosplayContentNullableListFilter");
const EnumCupNumberNullableWithAggregatesFilter_1 = require("../inputs/EnumCupNumberNullableWithAggregatesFilter");
const EnumLanguageTypeNullableListFilter_1 = require("../inputs/EnumLanguageTypeNullableListFilter");
const EnumPriorityOrderNullableWithAggregatesFilter_1 = require("../inputs/EnumPriorityOrderNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let CastScalarWhereWithAggregatesInput = exports.CastScalarWhereWithAggregatesInput = CastScalarWhereWithAggregatesInput_1 = class CastScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLanguageTypeNullableListFilter_1.EnumLanguageTypeNullableListFilter)
], CastScalarWhereWithAggregatesInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCosplayContentNullableListFilter_1.EnumCosplayContentNullableListFilter)
], CastScalarWhereWithAggregatesInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCupNumberNullableWithAggregatesFilter_1.EnumCupNumberNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCupNumberNullableWithAggregatesFilter_1.EnumCupNumberNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityOrderNullableWithAggregatesFilter_1.EnumPriorityOrderNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityOrderNullableWithAggregatesFilter_1.EnumPriorityOrderNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalWithAggregatesFilter_1.EnumApprovalWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalWithAggregatesFilter_1.EnumApprovalWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], CastScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
exports.CastScalarWhereWithAggregatesInput = CastScalarWhereWithAggregatesInput = CastScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CastScalarWhereWithAggregatesInput", {})
], CastScalarWhereWithAggregatesInput);
