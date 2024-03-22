"use strict";
var ShiftManagementWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastRelationFilter_1 = require("../inputs/CastRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumCastSideReservationStatusFilter_1 = require("../inputs/EnumCastSideReservationStatusFilter");
const EnumClientSideSlotStatusFilter_1 = require("../inputs/EnumClientSideSlotStatusFilter");
const ReservationNullableRelationFilter_1 = require("../inputs/ReservationNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ShiftManagementWhereInput = exports.ShiftManagementWhereInput = ShiftManagementWhereInput_1 = class ShiftManagementWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ShiftManagementWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ShiftManagementWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ShiftManagementWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter)
], ShiftManagementWhereInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter)
], ShiftManagementWhereInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereInput.prototype, "reservationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ShiftManagementWhereInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationNullableRelationFilter_1.ReservationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationNullableRelationFilter_1.ReservationNullableRelationFilter)
], ShiftManagementWhereInput.prototype, "Reservation", void 0);
exports.ShiftManagementWhereInput = ShiftManagementWhereInput = ShiftManagementWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementWhereInput", {})
], ShiftManagementWhereInput);
