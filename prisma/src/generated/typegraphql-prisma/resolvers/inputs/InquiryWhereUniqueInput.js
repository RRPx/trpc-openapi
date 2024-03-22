"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumInquirerRoleFilter_1 = require("../inputs/EnumInquirerRoleFilter");
const InquiryWhereInput_1 = require("../inputs/InquiryWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let InquiryWhereUniqueInput = class InquiryWhereUniqueInput {
};
exports.InquiryWhereUniqueInput = InquiryWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1.InquiryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1.InquiryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryWhereInput_1.InquiryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InquiryWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereUniqueInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InquiryWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], InquiryWhereUniqueInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumInquirerRoleFilter_1.EnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumInquirerRoleFilter_1.EnumInquirerRoleFilter)
], InquiryWhereUniqueInput.prototype, "inquirerRole", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InquiryWhereUniqueInput.prototype, "created_at", void 0);
exports.InquiryWhereUniqueInput = InquiryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InquiryWhereUniqueInput", {})
], InquiryWhereUniqueInput);
