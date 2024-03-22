"use strict";
var NestedEnumCategoryNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCategoryNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCategoryNullableFilter_1 = require("../inputs/NestedEnumCategoryNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Category_1 = require("../../enums/Category");
let NestedEnumCategoryNullableWithAggregatesFilter = exports.NestedEnumCategoryNullableWithAggregatesFilter = NestedEnumCategoryNullableWithAggregatesFilter_1 = class NestedEnumCategoryNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableWithAggregatesFilter)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter)
], NestedEnumCategoryNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumCategoryNullableWithAggregatesFilter = NestedEnumCategoryNullableWithAggregatesFilter = NestedEnumCategoryNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCategoryNullableWithAggregatesFilter", {})
], NestedEnumCategoryNullableWithAggregatesFilter);
