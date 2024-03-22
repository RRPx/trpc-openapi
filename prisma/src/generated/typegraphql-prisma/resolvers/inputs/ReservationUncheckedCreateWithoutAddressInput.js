"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateNestedOneWithoutReservationInput");
const OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedCreateNestedManyWithoutReservationInput");
const ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationUncheckedCreateWithoutAddressInput = class ReservationUncheckedCreateWithoutAddressInput {
};
exports.ReservationUncheckedCreateWithoutAddressInput = ReservationUncheckedCreateWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput)
], ReservationUncheckedCreateWithoutAddressInput.prototype, "chat_room", void 0);
exports.ReservationUncheckedCreateWithoutAddressInput = ReservationUncheckedCreateWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateWithoutAddressInput", {})
], ReservationUncheckedCreateWithoutAddressInput);
