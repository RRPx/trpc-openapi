"use strict";
var NestedEnumCastSideReservationStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCastSideReservationStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCastSideReservationStatusFilter_1 = require("../inputs/NestedEnumCastSideReservationStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
let NestedEnumCastSideReservationStatusWithAggregatesFilter = exports.NestedEnumCastSideReservationStatusWithAggregatesFilter = NestedEnumCastSideReservationStatusWithAggregatesFilter_1 = class NestedEnumCastSideReservationStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusWithAggregatesFilter)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter)
], NestedEnumCastSideReservationStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumCastSideReservationStatusWithAggregatesFilter = NestedEnumCastSideReservationStatusWithAggregatesFilter = NestedEnumCastSideReservationStatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCastSideReservationStatusWithAggregatesFilter", {})
], NestedEnumCastSideReservationStatusWithAggregatesFilter);
