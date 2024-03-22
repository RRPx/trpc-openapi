"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateNestedOneWithoutShift_idInput_1 = require("../inputs/ReservationCreateNestedOneWithoutShift_idInput");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let ShiftManagementCreateWithoutCastInput = class ShiftManagementCreateWithoutCastInput {
};
exports.ShiftManagementCreateWithoutCastInput = ShiftManagementCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutCastInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutCastInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutCastInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutCastInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutCastInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutCastInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutCastInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedOneWithoutShift_idInput_1.ReservationCreateNestedOneWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedOneWithoutShift_idInput_1.ReservationCreateNestedOneWithoutShift_idInput)
], ShiftManagementCreateWithoutCastInput.prototype, "Reservation", void 0);
exports.ShiftManagementCreateWithoutCastInput = ShiftManagementCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateWithoutCastInput", {})
], ShiftManagementCreateWithoutCastInput);
