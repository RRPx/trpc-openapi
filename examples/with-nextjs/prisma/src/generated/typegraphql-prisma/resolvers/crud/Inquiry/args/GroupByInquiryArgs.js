"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryOrderByWithAggregationInput_1 = require("../../../inputs/InquiryOrderByWithAggregationInput");
const InquiryScalarWhereWithAggregatesInput_1 = require("../../../inputs/InquiryScalarWhereWithAggregatesInput");
const InquiryWhereInput_1 = require("../../../inputs/InquiryWhereInput");
const InquiryScalarFieldEnum_1 = require("../../../../enums/InquiryScalarFieldEnum");
let GroupByInquiryArgs = exports.GroupByInquiryArgs = class GroupByInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereInput_1.InquiryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereInput_1.InquiryWhereInput)
], GroupByInquiryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryOrderByWithAggregationInput_1.InquiryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInquiryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryScalarFieldEnum_1.InquiryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInquiryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryScalarWhereWithAggregatesInput_1.InquiryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryScalarWhereWithAggregatesInput_1.InquiryScalarWhereWithAggregatesInput)
], GroupByInquiryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInquiryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInquiryArgs.prototype, "skip", void 0);
exports.GroupByInquiryArgs = GroupByInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInquiryArgs);
