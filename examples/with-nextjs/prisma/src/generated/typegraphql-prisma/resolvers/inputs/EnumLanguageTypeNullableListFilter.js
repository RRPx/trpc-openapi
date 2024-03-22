"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLanguageTypeNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LanguageType_1 = require("../../enums/LanguageType");
let EnumLanguageTypeNullableListFilter = exports.EnumLanguageTypeNullableListFilter = class EnumLanguageTypeNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLanguageTypeNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LanguageType_1.LanguageType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLanguageTypeNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLanguageTypeNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLanguageTypeNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumLanguageTypeNullableListFilter.prototype, "isEmpty", void 0);
exports.EnumLanguageTypeNullableListFilter = EnumLanguageTypeNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLanguageTypeNullableListFilter", {})
], EnumLanguageTypeNullableListFilter);
