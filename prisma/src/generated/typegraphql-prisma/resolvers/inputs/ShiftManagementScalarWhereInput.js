"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumCastSideReservationStatusFilter_1 = require("../inputs/EnumCastSideReservationStatusFilter");
const EnumClientSideSlotStatusFilter_1 = require("../inputs/EnumClientSideSlotStatusFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ShiftManagementScalarWhereInput = class ShiftManagementScalarWhereInput {
};
exports.ShiftManagementScalarWhereInput = ShiftManagementScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ShiftManagementScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ShiftManagementScalarWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ShiftManagementScalarWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCastSideReservationStatusFilter_1.EnumCastSideReservationStatusFilter)
], ShiftManagementScalarWhereInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumClientSideSlotStatusFilter_1.EnumClientSideSlotStatusFilter)
], ShiftManagementScalarWhereInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ShiftManagementScalarWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ShiftManagementScalarWhereInput.prototype, "reservationId", void 0);
exports.ShiftManagementScalarWhereInput = ShiftManagementScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementScalarWhereInput", {})
], ShiftManagementScalarWhereInput);
