"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCategoryNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCategoryNullableFilter_1 = require("../inputs/NestedEnumCategoryNullableFilter");
const Category_1 = require("../../enums/Category");
let EnumCategoryNullableFilter = exports.EnumCategoryNullableFilter = class EnumCategoryNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCategoryNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCategoryNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCategoryNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter_1.NestedEnumCategoryNullableFilter)
], EnumCategoryNullableFilter.prototype, "not", void 0);
exports.EnumCategoryNullableFilter = EnumCategoryNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCategoryNullableFilter", {})
], EnumCategoryNullableFilter);
