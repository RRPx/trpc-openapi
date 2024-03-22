"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterAvgOrderByAggregateInput_1 = require("../inputs/OptionMasterAvgOrderByAggregateInput");
const OptionMasterCountOrderByAggregateInput_1 = require("../inputs/OptionMasterCountOrderByAggregateInput");
const OptionMasterMaxOrderByAggregateInput_1 = require("../inputs/OptionMasterMaxOrderByAggregateInput");
const OptionMasterMinOrderByAggregateInput_1 = require("../inputs/OptionMasterMinOrderByAggregateInput");
const OptionMasterSumOrderByAggregateInput_1 = require("../inputs/OptionMasterSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OptionMasterOrderByWithAggregationInput = exports.OptionMasterOrderByWithAggregationInput = class OptionMasterOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCountOrderByAggregateInput_1.OptionMasterCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCountOrderByAggregateInput_1.OptionMasterCountOrderByAggregateInput)
], OptionMasterOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterAvgOrderByAggregateInput_1.OptionMasterAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterAvgOrderByAggregateInput_1.OptionMasterAvgOrderByAggregateInput)
], OptionMasterOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMaxOrderByAggregateInput_1.OptionMasterMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMaxOrderByAggregateInput_1.OptionMasterMaxOrderByAggregateInput)
], OptionMasterOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMinOrderByAggregateInput_1.OptionMasterMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMinOrderByAggregateInput_1.OptionMasterMinOrderByAggregateInput)
], OptionMasterOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterSumOrderByAggregateInput_1.OptionMasterSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterSumOrderByAggregateInput_1.OptionMasterSumOrderByAggregateInput)
], OptionMasterOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.OptionMasterOrderByWithAggregationInput = OptionMasterOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterOrderByWithAggregationInput", {})
], OptionMasterOrderByWithAggregationInput);
