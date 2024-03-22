"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereInput_1 = require("../inputs/BankInformationWhereInput");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastNullableRelationFilter_1 = require("../inputs/CastNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let BankInformationWhereUniqueInput = exports.BankInformationWhereUniqueInput = class BankInformationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationWhereUniqueInput.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereInput_1.BankInformationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereInput_1.BankInformationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereInput_1.BankInformationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BankInformationWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BankInformationWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BankInformationWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], BankInformationWhereUniqueInput.prototype, "is_deleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastNullableRelationFilter_1.CastNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastNullableRelationFilter_1.CastNullableRelationFilter)
], BankInformationWhereUniqueInput.prototype, "cast", void 0);
exports.BankInformationWhereUniqueInput = BankInformationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationWhereUniqueInput", {})
], BankInformationWhereUniqueInput);
