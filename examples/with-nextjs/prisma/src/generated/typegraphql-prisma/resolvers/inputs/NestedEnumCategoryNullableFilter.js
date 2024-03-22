"use strict";
var NestedEnumCategoryNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCategoryNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../../enums/Category");
let NestedEnumCategoryNullableFilter = exports.NestedEnumCategoryNullableFilter = NestedEnumCategoryNullableFilter_1 = class NestedEnumCategoryNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCategoryNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCategoryNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Category_1.Category], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCategoryNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCategoryNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCategoryNullableFilter)
], NestedEnumCategoryNullableFilter.prototype, "not", void 0);
exports.NestedEnumCategoryNullableFilter = NestedEnumCategoryNullableFilter = NestedEnumCategoryNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCategoryNullableFilter", {})
], NestedEnumCategoryNullableFilter);
