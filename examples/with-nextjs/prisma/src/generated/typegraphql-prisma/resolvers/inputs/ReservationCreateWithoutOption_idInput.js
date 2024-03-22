"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutReservationInput_1 = require("../inputs/AddressCreateNestedOneWithoutReservationInput");
const CastCreateNestedOneWithoutReservationInput_1 = require("../inputs/CastCreateNestedOneWithoutReservationInput");
const ChatRoomCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomCreateNestedOneWithoutReservationInput");
const ClientCreateNestedOneWithoutReservationInput_1 = require("../inputs/ClientCreateNestedOneWithoutReservationInput");
const ShiftManagementCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationCreateWithoutOption_idInput = exports.ReservationCreateWithoutOption_idInput = class ReservationCreateWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutOption_idInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutOption_idInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutOption_idInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutOption_idInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutOption_idInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutOption_idInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationCreateWithoutOption_idInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutOption_idInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutOption_idInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutOption_idInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutOption_idInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutOption_idInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutOption_idInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutOption_idInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutOption_idInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutOption_idInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutOption_idInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutOption_idInput.prototype, "address", void 0);
exports.ReservationCreateWithoutOption_idInput = ReservationCreateWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateWithoutOption_idInput", {})
], ReservationCreateWithoutOption_idInput);
