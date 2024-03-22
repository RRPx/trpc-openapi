"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateWithoutShift_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1 = require("../inputs/ChatRoomUncheckedCreateNestedOneWithoutReservationInput");
const OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedCreateNestedManyWithoutReservationInput");
const Approval_1 = require("../../enums/Approval");
let ReservationUncheckedCreateWithoutShift_idInput = exports.ReservationUncheckedCreateWithoutShift_idInput = class ReservationUncheckedCreateWithoutShift_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateNestedManyWithoutReservationInput_1.OptionMasterUncheckedCreateNestedManyWithoutReservationInput)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateNestedOneWithoutReservationInput_1.ChatRoomUncheckedCreateNestedOneWithoutReservationInput)
], ReservationUncheckedCreateWithoutShift_idInput.prototype, "chat_room", void 0);
exports.ReservationUncheckedCreateWithoutShift_idInput = ReservationUncheckedCreateWithoutShift_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateWithoutShift_idInput", {})
], ReservationUncheckedCreateWithoutShift_idInput);
