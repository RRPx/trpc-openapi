"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutShift_managementInput_1 = require("../inputs/CastCreateNestedOneWithoutShift_managementInput");
const ReservationCreateNestedOneWithoutShift_idInput_1 = require("../inputs/ReservationCreateNestedOneWithoutShift_idInput");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let ShiftManagementCreateInput = class ShiftManagementCreateInput {
};
exports.ShiftManagementCreateInput = ShiftManagementCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementCreateInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutShift_managementInput_1.CastCreateNestedOneWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutShift_managementInput_1.CastCreateNestedOneWithoutShift_managementInput)
], ShiftManagementCreateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedOneWithoutShift_idInput_1.ReservationCreateNestedOneWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedOneWithoutShift_idInput_1.ReservationCreateNestedOneWithoutShift_idInput)
], ShiftManagementCreateInput.prototype, "Reservation", void 0);
exports.ShiftManagementCreateInput = ShiftManagementCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateInput", {})
], ShiftManagementCreateInput);
