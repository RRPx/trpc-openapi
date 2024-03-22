"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutReservationInput_1 = require("../inputs/AddressCreateNestedOneWithoutReservationInput");
const ChatRoomCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomCreateNestedOneWithoutReservationInput");
const ClientCreateNestedOneWithoutReservationInput_1 = require("../inputs/ClientCreateNestedOneWithoutReservationInput");
const OptionMasterCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterCreateNestedManyWithoutReservationInput");
const ShiftManagementCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationCreateWithoutCastInput = class ReservationCreateWithoutCastInput {
};
exports.ReservationCreateWithoutCastInput = ReservationCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutCastInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutCastInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutCastInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutCastInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutCastInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationCreateWithoutCastInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutCastInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutCastInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutCastInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutCastInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutCastInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutCastInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutCastInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutReservationInput_1.AddressCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutCastInput.prototype, "address", void 0);
exports.ReservationCreateWithoutCastInput = ReservationCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateWithoutCastInput", {})
], ReservationCreateWithoutCastInput);
