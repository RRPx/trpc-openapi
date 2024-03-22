"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumGenderNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumGenderNullableFilter_1 = require("../inputs/NestedEnumGenderNullableFilter");
const NestedEnumGenderNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumGenderNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Gender_1 = require("../../enums/Gender");
let EnumGenderNullableWithAggregatesFilter = exports.EnumGenderNullableWithAggregatesFilter = class EnumGenderNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumGenderNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumGenderNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumGenderNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableWithAggregatesFilter_1.NestedEnumGenderNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableWithAggregatesFilter_1.NestedEnumGenderNullableWithAggregatesFilter)
], EnumGenderNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumGenderNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter)
], EnumGenderNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter)
], EnumGenderNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumGenderNullableWithAggregatesFilter = EnumGenderNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumGenderNullableWithAggregatesFilter", {})
], EnumGenderNullableWithAggregatesFilter);
