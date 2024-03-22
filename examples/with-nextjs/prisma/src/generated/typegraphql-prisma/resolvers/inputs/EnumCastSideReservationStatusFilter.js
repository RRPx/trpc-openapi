"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCastSideReservationStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCastSideReservationStatusFilter_1 = require("../inputs/NestedEnumCastSideReservationStatusFilter");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
let EnumCastSideReservationStatusFilter = exports.EnumCastSideReservationStatusFilter = class EnumCastSideReservationStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCastSideReservationStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCastSideReservationStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastSideReservationStatus_1.CastSideReservationStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCastSideReservationStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCastSideReservationStatusFilter_1.NestedEnumCastSideReservationStatusFilter)
], EnumCastSideReservationStatusFilter.prototype, "not", void 0);
exports.EnumCastSideReservationStatusFilter = EnumCastSideReservationStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCastSideReservationStatusFilter", {})
], EnumCastSideReservationStatusFilter);
