"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCastSideReservationStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
let NestedEnumCastSideReservationStatusFilter = class NestedEnumCastSideReservationStatusFilter {
};
exports.NestedEnumCastSideReservationStatusFilter = NestedEnumCastSideReservationStatusFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCastSideReservationStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCastSideReservationStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCastSideReservationStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter)
], NestedEnumCastSideReservationStatusFilter.prototype, "not", void 0);
exports.NestedEnumCastSideReservationStatusFilter = NestedEnumCastSideReservationStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCastSideReservationStatusFilter", {})
], NestedEnumCastSideReservationStatusFilter);
