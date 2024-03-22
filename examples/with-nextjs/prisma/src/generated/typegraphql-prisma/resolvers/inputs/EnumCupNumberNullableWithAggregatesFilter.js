"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCupNumberNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCupNumberNullableFilter_1 = require("../inputs/NestedEnumCupNumberNullableFilter");
const NestedEnumCupNumberNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumCupNumberNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const CupNumber_1 = require("../../enums/CupNumber");
let EnumCupNumberNullableWithAggregatesFilter = exports.EnumCupNumberNullableWithAggregatesFilter = class EnumCupNumberNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableWithAggregatesFilter_1.NestedEnumCupNumberNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableWithAggregatesFilter_1.NestedEnumCupNumberNullableWithAggregatesFilter)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter)
], EnumCupNumberNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumCupNumberNullableWithAggregatesFilter = EnumCupNumberNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCupNumberNullableWithAggregatesFilter", {})
], EnumCupNumberNullableWithAggregatesFilter);
