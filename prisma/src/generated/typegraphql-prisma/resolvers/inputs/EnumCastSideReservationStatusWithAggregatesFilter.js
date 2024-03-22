"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCastSideReservationStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCastSideReservationStatusFilter_1 = require("../inputs/NestedEnumCastSideReservationStatusFilter");
const NestedEnumCastSideReservationStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumCastSideReservationStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
let EnumCastSideReservationStatusWithAggregatesFilter = class EnumCastSideReservationStatusWithAggregatesFilter {
};
exports.EnumCastSideReservationStatusWithAggregatesFilter = EnumCastSideReservationStatusWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusWithAggregatesFilter_1.NestedEnumCastSideReservationStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusWithAggregatesFilter_1.NestedEnumCastSideReservationStatusWithAggregatesFilter)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter)
], EnumCastSideReservationStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumCastSideReservationStatusWithAggregatesFilter = EnumCastSideReservationStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCastSideReservationStatusWithAggregatesFilter", {})
], EnumCastSideReservationStatusWithAggregatesFilter);
