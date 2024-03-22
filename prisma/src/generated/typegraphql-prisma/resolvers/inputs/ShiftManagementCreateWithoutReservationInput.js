"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutShift_managementInput_1 = require("../inputs/CastCreateNestedOneWithoutShift_managementInput");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let ShiftManagementCreateWithoutReservationInput = class ShiftManagementCreateWithoutReservationInput {
};
exports.ShiftManagementCreateWithoutReservationInput = ShiftManagementCreateWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutReservationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutReservationInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutReservationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutReservationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutReservationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutReservationInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateWithoutReservationInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutShift_managementInput_1.CastCreateNestedOneWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutShift_managementInput_1.CastCreateNestedOneWithoutShift_managementInput)
], ShiftManagementCreateWithoutReservationInput.prototype, "cast", void 0);
exports.ShiftManagementCreateWithoutReservationInput = ShiftManagementCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateWithoutReservationInput", {})
], ShiftManagementCreateWithoutReservationInput);
