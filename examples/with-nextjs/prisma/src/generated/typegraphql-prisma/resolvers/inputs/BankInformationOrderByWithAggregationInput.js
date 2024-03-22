"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCountOrderByAggregateInput_1 = require("../inputs/BankInformationCountOrderByAggregateInput");
const BankInformationMaxOrderByAggregateInput_1 = require("../inputs/BankInformationMaxOrderByAggregateInput");
const BankInformationMinOrderByAggregateInput_1 = require("../inputs/BankInformationMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BankInformationOrderByWithAggregationInput = exports.BankInformationOrderByWithAggregationInput = class BankInformationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithAggregationInput.prototype, "is_deleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCountOrderByAggregateInput_1.BankInformationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCountOrderByAggregateInput_1.BankInformationCountOrderByAggregateInput)
], BankInformationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMaxOrderByAggregateInput_1.BankInformationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMaxOrderByAggregateInput_1.BankInformationMaxOrderByAggregateInput)
], BankInformationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMinOrderByAggregateInput_1.BankInformationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMinOrderByAggregateInput_1.BankInformationMinOrderByAggregateInput)
], BankInformationOrderByWithAggregationInput.prototype, "_min", void 0);
exports.BankInformationOrderByWithAggregationInput = BankInformationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationOrderByWithAggregationInput", {})
], BankInformationOrderByWithAggregationInput);
