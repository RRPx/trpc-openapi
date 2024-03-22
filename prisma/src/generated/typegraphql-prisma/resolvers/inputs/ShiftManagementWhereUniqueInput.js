"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastRelationFilter_1 = require("../inputs/CastRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumCastSideReservationStatusFilter_1 = require("../inputs/EnumCastSideReservationStatusFilter");
const EnumClientSideSlotStatusFilter_1 = require("../inputs/EnumClientSideSlotStatusFilter");
const ReservationNullableRelationFilter_1 = require("../inputs/ReservationNullableRelationFilter");
const ShiftManagementWhereInput_1 = require("../inputs/ShiftManagementWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ShiftManagementWhereUniqueInput = class ShiftManagementWhereUniqueInput {
};
exports.ShiftManagementWhereUniqueInput = ShiftManagementWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1.ShiftManagementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1.ShiftManagementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereInput_1.ShiftManagementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ShiftManagementWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ShiftManagementWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter)
], ShiftManagementWhereUniqueInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter)
], ShiftManagementWhereUniqueInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementWhereUniqueInput.prototype, "reservationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ShiftManagementWhereUniqueInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationNullableRelationFilter_1.ReservationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationNullableRelationFilter_1.ReservationNullableRelationFilter)
], ShiftManagementWhereUniqueInput.prototype, "Reservation", void 0);
exports.ShiftManagementWhereUniqueInput = ShiftManagementWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementWhereUniqueInput", {})
], ShiftManagementWhereUniqueInput);
