"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryOrderByWithRelationInput_1 = require("../../../inputs/InquiryOrderByWithRelationInput");
const InquiryWhereInput_1 = require("../../../inputs/InquiryWhereInput");
const InquiryWhereUniqueInput_1 = require("../../../inputs/InquiryWhereUniqueInput");
const InquiryScalarFieldEnum_1 = require("../../../../enums/InquiryScalarFieldEnum");
let FindFirstInquiryArgs = exports.FindFirstInquiryArgs = class FindFirstInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereInput_1.InquiryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereInput_1.InquiryWhereInput)
], FindFirstInquiryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryOrderByWithRelationInput_1.InquiryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInquiryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereUniqueInput_1.InquiryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereUniqueInput_1.InquiryWhereUniqueInput)
], FindFirstInquiryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInquiryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInquiryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryScalarFieldEnum_1.InquiryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInquiryArgs.prototype, "distinct", void 0);
exports.FindFirstInquiryArgs = FindFirstInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstInquiryArgs);
