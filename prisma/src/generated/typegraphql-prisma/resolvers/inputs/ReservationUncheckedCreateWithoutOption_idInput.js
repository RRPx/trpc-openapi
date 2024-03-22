"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateNestedOneWithoutReservationInput");
const ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationUncheckedCreateWithoutOption_idInput = class ReservationUncheckedCreateWithoutOption_idInput {
};
exports.ReservationUncheckedCreateWithoutOption_idInput = ReservationUncheckedCreateWithoutOption_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput)
], ReservationUncheckedCreateWithoutOption_idInput.prototype, "chat_room", void 0);
exports.ReservationUncheckedCreateWithoutOption_idInput = ReservationUncheckedCreateWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateWithoutOption_idInput", {})
], ReservationUncheckedCreateWithoutOption_idInput);
