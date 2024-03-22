"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPriorityOrderNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPriorityOrderNullableFilter_1 = require("../inputs/NestedEnumPriorityOrderNullableFilter");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let EnumPriorityOrderNullableFilter = class EnumPriorityOrderNullableFilter {
};
exports.EnumPriorityOrderNullableFilter = EnumPriorityOrderNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPriorityOrderNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityOrderNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityOrderNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter_1.NestedEnumPriorityOrderNullableFilter)
], EnumPriorityOrderNullableFilter.prototype, "not", void 0);
exports.EnumPriorityOrderNullableFilter = EnumPriorityOrderNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPriorityOrderNullableFilter", {})
], EnumPriorityOrderNullableFilter);
