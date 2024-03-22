"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumGenderNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gender_1 = require("../../enums/Gender");
let NestedEnumGenderNullableFilter = class NestedEnumGenderNullableFilter {
};
exports.NestedEnumGenderNullableFilter = NestedEnumGenderNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumGenderNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumGenderNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gender_1.Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumGenderNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumGenderNullableFilter)
], NestedEnumGenderNullableFilter.prototype, "not", void 0);
exports.NestedEnumGenderNullableFilter = NestedEnumGenderNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumGenderNullableFilter", {})
], NestedEnumGenderNullableFilter);
