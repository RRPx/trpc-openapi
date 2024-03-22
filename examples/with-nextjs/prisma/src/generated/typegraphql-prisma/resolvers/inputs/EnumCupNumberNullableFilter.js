"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCupNumberNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCupNumberNullableFilter_1 = require("../inputs/NestedEnumCupNumberNullableFilter");
const CupNumber_1 = require("../../enums/CupNumber");
let EnumCupNumberNullableFilter = exports.EnumCupNumberNullableFilter = class EnumCupNumberNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCupNumberNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCupNumberNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCupNumberNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter)
], EnumCupNumberNullableFilter.prototype, "not", void 0);
exports.EnumCupNumberNullableFilter = EnumCupNumberNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCupNumberNullableFilter", {})
], EnumCupNumberNullableFilter);
