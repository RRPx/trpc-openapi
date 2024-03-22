"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPriorityOrderNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPriorityOrderNullableFilter_1 = require("../inputs/NestedEnumPriorityOrderNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let NestedEnumPriorityOrderNullableWithAggregatesFilter = class NestedEnumPriorityOrderNullableWithAggregatesFilter {
};
exports.NestedEnumPriorityOrderNullableWithAggregatesFilter = NestedEnumPriorityOrderNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableWithAggregatesFilter)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter)
], NestedEnumPriorityOrderNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumPriorityOrderNullableWithAggregatesFilter = NestedEnumPriorityOrderNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPriorityOrderNullableWithAggregatesFilter", {})
], NestedEnumPriorityOrderNullableWithAggregatesFilter);
