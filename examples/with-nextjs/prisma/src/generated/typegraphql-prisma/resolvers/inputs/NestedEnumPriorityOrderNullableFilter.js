"use strict";
var NestedEnumPriorityOrderNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPriorityOrderNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let NestedEnumPriorityOrderNullableFilter = exports.NestedEnumPriorityOrderNullableFilter = NestedEnumPriorityOrderNullableFilter_1 = class NestedEnumPriorityOrderNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPriorityOrderNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityOrderNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrder_1.PriorityOrder], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityOrderNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityOrderNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityOrderNullableFilter)
], NestedEnumPriorityOrderNullableFilter.prototype, "not", void 0);
exports.NestedEnumPriorityOrderNullableFilter = NestedEnumPriorityOrderNullableFilter = NestedEnumPriorityOrderNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPriorityOrderNullableFilter", {})
], NestedEnumPriorityOrderNullableFilter);
