"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateNestedOneWithoutReservationInput");
const OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedCreateNestedManyWithoutReservationInput");
const ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationUncheckedCreateInput = class ReservationUncheckedCreateInput {
};
exports.ReservationUncheckedCreateInput = ReservationUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationUncheckedCreateInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateNestedManyWithoutReservationInput_1.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput)
], ReservationUncheckedCreateInput.prototype, "chat_room", void 0);
exports.ReservationUncheckedCreateInput = ReservationUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateInput", {})
], ReservationUncheckedCreateInput);
