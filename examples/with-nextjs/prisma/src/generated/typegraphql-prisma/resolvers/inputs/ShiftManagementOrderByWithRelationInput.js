"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByWithRelationInput_1 = require("../inputs/CastOrderByWithRelationInput");
const ReservationOrderByWithRelationInput_1 = require("../inputs/ReservationOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShiftManagementOrderByWithRelationInput = exports.ShiftManagementOrderByWithRelationInput = class ShiftManagementOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithRelationInput.prototype, "reservationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByWithRelationInput_1.CastOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByWithRelationInput_1.CastOrderByWithRelationInput)
], ShiftManagementOrderByWithRelationInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput)
], ShiftManagementOrderByWithRelationInput.prototype, "Reservation", void 0);
exports.ShiftManagementOrderByWithRelationInput = ShiftManagementOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementOrderByWithRelationInput", {})
], ShiftManagementOrderByWithRelationInput);
