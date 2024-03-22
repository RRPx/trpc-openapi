"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUncheckedCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let ShiftManagementUncheckedCreateWithoutCastInput = exports.ShiftManagementUncheckedCreateWithoutCastInput = class ShiftManagementUncheckedCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementUncheckedCreateWithoutCastInput.prototype, "reservationId", void 0);
exports.ShiftManagementUncheckedCreateWithoutCastInput = ShiftManagementUncheckedCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUncheckedCreateWithoutCastInput", {})
], ShiftManagementUncheckedCreateWithoutCastInput);
