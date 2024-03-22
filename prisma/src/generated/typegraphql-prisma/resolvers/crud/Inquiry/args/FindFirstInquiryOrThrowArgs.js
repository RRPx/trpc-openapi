"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInquiryOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryOrderByWithRelationInput_1 = require("../../../inputs/InquiryOrderByWithRelationInput");
const InquiryWhereInput_1 = require("../../../inputs/InquiryWhereInput");
const InquiryWhereUniqueInput_1 = require("../../../inputs/InquiryWhereUniqueInput");
const InquiryScalarFieldEnum_1 = require("../../../../enums/InquiryScalarFieldEnum");
let FindFirstInquiryOrThrowArgs = class FindFirstInquiryOrThrowArgs {
};
exports.FindFirstInquiryOrThrowArgs = FindFirstInquiryOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereInput_1.InquiryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereInput_1.InquiryWhereInput)
], FindFirstInquiryOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryOrderByWithRelationInput_1.InquiryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInquiryOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereUniqueInput_1.InquiryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereUniqueInput_1.InquiryWhereUniqueInput)
], FindFirstInquiryOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInquiryOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInquiryOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryScalarFieldEnum_1.InquiryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInquiryOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstInquiryOrThrowArgs = FindFirstInquiryOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstInquiryOrThrowArgs);
