"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCosplayContentNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CosplayContent_1 = require("../../enums/CosplayContent");
let EnumCosplayContentNullableListFilter = exports.EnumCosplayContentNullableListFilter = class EnumCosplayContentNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCosplayContentNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CosplayContent_1.CosplayContent, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCosplayContentNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCosplayContentNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCosplayContentNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumCosplayContentNullableListFilter.prototype, "isEmpty", void 0);
exports.EnumCosplayContentNullableListFilter = EnumCosplayContentNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCosplayContentNullableListFilter", {})
], EnumCosplayContentNullableListFilter);
