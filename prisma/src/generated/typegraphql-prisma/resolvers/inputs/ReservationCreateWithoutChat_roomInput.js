"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutReservationInput_1 = require("../inputs/AddressCreateNestedOneWithoutReservationInput");
const CastCreateNestedOneWithoutReservationInput_1 = require("../inputs/CastCreateNestedOneWithoutReservationInput");
const ClientCreateNestedOneWithoutReservationInput_1 = require("../inputs/ClientCreateNestedOneWithoutReservationInput");
const OptionMasterCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterCreateNestedManyWithoutReservationInput");
const ShiftManagementCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationCreateWithoutChat_roomInput = class ReservationCreateWithoutChat_roomInput {
};
exports.ReservationCreateWithoutChat_roomInput = ReservationCreateWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutChat_roomInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutChat_roomInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutChat_roomInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutChat_roomInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutChat_roomInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutChat_roomInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationCreateWithoutChat_roomInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutChat_roomInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutChat_roomInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutChat_roomInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutChat_roomInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutChat_roomInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutChat_roomInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutChat_roomInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutChat_roomInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutChat_roomInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutChat_roomInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutChat_roomInput.prototype, "address", void 0);
exports.ReservationCreateWithoutChat_roomInput = ReservationCreateWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateWithoutChat_roomInput", {})
], ReservationCreateWithoutChat_roomInput);
