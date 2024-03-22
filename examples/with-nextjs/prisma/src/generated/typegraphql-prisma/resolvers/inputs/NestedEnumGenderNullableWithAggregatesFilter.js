"use strict";
var NestedEnumGenderNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumGenderNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumGenderNullableFilter_1 = require("../inputs/NestedEnumGenderNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Gender_1 = require("../../enums/Gender");
let NestedEnumGenderNullableWithAggregatesFilter = exports.NestedEnumGenderNullableWithAggregatesFilter = NestedEnumGenderNullableWithAggregatesFilter_1 = class NestedEnumGenderNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableWithAggregatesFilter)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter)
], NestedEnumGenderNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumGenderNullableWithAggregatesFilter = NestedEnumGenderNullableWithAggregatesFilter = NestedEnumGenderNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumGenderNullableWithAggregatesFilter", {})
], NestedEnumGenderNullableWithAggregatesFilter);
