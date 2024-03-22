"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagement = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastSideReservationStatus_1 = require("../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../enums/ClientSideSlotStatus");
let ShiftManagement = class ShiftManagement {
};
exports.ShiftManagement = ShiftManagement;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagement.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagement.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagement.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagement.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagement.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagement.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagement.prototype, "reservationId", void 0);
exports.ShiftManagement = ShiftManagement = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShiftManagement", {})
], ShiftManagement);
