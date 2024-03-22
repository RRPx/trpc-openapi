"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPriorityOrderNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPriorityOrderNullableFilter_1 = require("../inputs/NestedEnumPriorityOrderNullableFilter");
const NestedEnumPriorityOrderNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumPriorityOrderNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let EnumPriorityOrderNullableWithAggregatesFilter = exports.EnumPriorityOrderNullableWithAggregatesFilter = class EnumPriorityOrderNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableWithAggregatesFilter_1.NestedEnumPriorityOrderNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableWithAggregatesFilter_1.NestedEnumPriorityOrderNullableWithAggregatesFilter)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter)
], EnumPriorityOrderNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumPriorityOrderNullableWithAggregatesFilter = EnumPriorityOrderNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPriorityOrderNullableWithAggregatesFilter", {})
], EnumPriorityOrderNullableWithAggregatesFilter);
