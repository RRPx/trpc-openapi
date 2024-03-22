"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationOrderByWithAggregationInput_1 = require("../../../inputs/BankInformationOrderByWithAggregationInput");
const BankInformationScalarWhereWithAggregatesInput_1 = require("../../../inputs/BankInformationScalarWhereWithAggregatesInput");
const BankInformationWhereInput_1 = require("../../../inputs/BankInformationWhereInput");
const BankInformationScalarFieldEnum_1 = require("../../../../enums/BankInformationScalarFieldEnum");
let GroupByBankInformationArgs = exports.GroupByBankInformationArgs = class GroupByBankInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], GroupByBankInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationOrderByWithAggregationInput_1.BankInformationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBankInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationScalarFieldEnum_1.BankInformationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBankInformationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationScalarWhereWithAggregatesInput_1.BankInformationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationScalarWhereWithAggregatesInput_1.BankInformationScalarWhereWithAggregatesInput)
], GroupByBankInformationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBankInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBankInformationArgs.prototype, "skip", void 0);
exports.GroupByBankInformationArgs = GroupByBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBankInformationArgs);
