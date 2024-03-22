"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutReservationInput_1 = require("../inputs/CastCreateNestedOneWithoutReservationInput");
const ChatRoomCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomCreateNestedOneWithoutReservationInput");
const ClientCreateNestedOneWithoutReservationInput_1 = require("../inputs/ClientCreateNestedOneWithoutReservationInput");
const OptionMasterCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterCreateNestedManyWithoutReservationInput");
const ShiftManagementCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationCreateWithoutAddressInput = exports.ReservationCreateWithoutAddressInput = class ReservationCreateWithoutAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutAddressInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutAddressInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutAddressInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutAddressInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutAddressInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutAddressInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationCreateWithoutAddressInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutAddressInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationCreateWithoutAddressInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateWithoutAddressInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutAddressInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutAddressInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationCreateWithoutAddressInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutReservationInput_1.CastCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutAddressInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutReservationInput_1.ClientCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutAddressInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCreateNestedManyWithoutReservationInput_1.OptionMasterCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutAddressInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutReservationInput_1.ShiftManagementCreateNestedManyWithoutReservationInput)
], ReservationCreateWithoutAddressInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCreateNestedOneWithoutReservationInput_1.ChatRoomCreateNestedOneWithoutReservationInput)
], ReservationCreateWithoutAddressInput.prototype, "chat_room", void 0);
exports.ReservationCreateWithoutAddressInput = ReservationCreateWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateWithoutAddressInput", {})
], ReservationCreateWithoutAddressInput);
