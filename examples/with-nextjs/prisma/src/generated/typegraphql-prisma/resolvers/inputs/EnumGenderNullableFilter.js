"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumGenderNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumGenderNullableFilter_1 = require("../inputs/NestedEnumGenderNullableFilter");
const Gender_1 = require("../../enums/Gender");
let EnumGenderNullableFilter = exports.EnumGenderNullableFilter = class EnumGenderNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumGenderNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumGenderNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumGenderNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter_1.NestedEnumGenderNullableFilter)
], EnumGenderNullableFilter.prototype, "not", void 0);
exports.EnumGenderNullableFilter = EnumGenderNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumGenderNullableFilter", {})
], EnumGenderNullableFilter);
