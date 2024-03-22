"use strict";
var InquiryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumInquirerRoleFilter_1 = require("../inputs/EnumInquirerRoleFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let InquiryWhereInput = exports.InquiryWhereInput = InquiryWhereInput_1 = class InquiryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], InquiryWhereInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumInquirerRoleFilter_1.EnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumInquirerRoleFilter_1.EnumInquirerRoleFilter)
], InquiryWhereInput.prototype, "inquirerRole", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InquiryWhereInput.prototype, "created_at", void 0);
exports.InquiryWhereInput = InquiryWhereInput = InquiryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InquiryWhereInput", {})
], InquiryWhereInput);
