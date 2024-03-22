"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCupNumberNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCupNumberNullableFilter_1 = require("../inputs/NestedEnumCupNumberNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const CupNumber_1 = require("../../enums/CupNumber");
let NestedEnumCupNumberNullableWithAggregatesFilter = class NestedEnumCupNumberNullableWithAggregatesFilter {
};
exports.NestedEnumCupNumberNullableWithAggregatesFilter = NestedEnumCupNumberNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableWithAggregatesFilter)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter_1.NestedEnumCupNumberNullableFilter)
], NestedEnumCupNumberNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumCupNumberNullableWithAggregatesFilter = NestedEnumCupNumberNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCupNumberNullableWithAggregatesFilter", {})
], NestedEnumCupNumberNullableWithAggregatesFilter);
