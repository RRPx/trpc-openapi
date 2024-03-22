"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCountAggregate_1 = require("../outputs/ShiftManagementCountAggregate");
const ShiftManagementMaxAggregate_1 = require("../outputs/ShiftManagementMaxAggregate");
const ShiftManagementMinAggregate_1 = require("../outputs/ShiftManagementMinAggregate");
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let ShiftManagementGroupBy = class ShiftManagementGroupBy {
};
exports.ShiftManagementGroupBy = ShiftManagementGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementGroupBy.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementGroupBy.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementGroupBy.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShiftManagementGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementGroupBy.prototype, "reservationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCountAggregate_1.ShiftManagementCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCountAggregate_1.ShiftManagementCountAggregate)
], ShiftManagementGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMinAggregate_1.ShiftManagementMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMinAggregate_1.ShiftManagementMinAggregate)
], ShiftManagementGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMaxAggregate_1.ShiftManagementMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMaxAggregate_1.ShiftManagementMaxAggregate)
], ShiftManagementGroupBy.prototype, "_max", void 0);
exports.ShiftManagementGroupBy = ShiftManagementGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShiftManagementGroupBy", {})
], ShiftManagementGroupBy);
