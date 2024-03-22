"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCategoryNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCategoryNullableFilter_1 = require("../inputs/NestedEnumCategoryNullableFilter");
const NestedEnumCategoryNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumCategoryNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Category_1 = require("../../enums/Category");
let EnumCategoryNullableWithAggregatesFilter = class EnumCategoryNullableWithAggregatesFilter {
};
exports.EnumCategoryNullableWithAggregatesFilter = EnumCategoryNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCategoryNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCategoryNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCategoryNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableWithAggregatesFilter_1.NestedEnumCategoryNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableWithAggregatesFilter_1.NestedEnumCategoryNullableWithAggregatesFilter)
], EnumCategoryNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumCategoryNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter)
], EnumCategoryNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter)
], EnumCategoryNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumCategoryNullableWithAggregatesFilter = EnumCategoryNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCategoryNullableWithAggregatesFilter", {})
], EnumCategoryNullableWithAggregatesFilter);
