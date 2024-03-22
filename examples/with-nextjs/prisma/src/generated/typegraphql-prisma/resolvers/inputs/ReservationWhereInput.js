"use strict";
var ReservationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressRelationFilter_1 = require("../inputs/AddressRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastRelationFilter_1 = require("../inputs/CastRelationFilter");
const ChatRoomNullableRelationFilter_1 = require("../inputs/ChatRoomNullableRelationFilter");
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumApprovalFilter_1 = require("../inputs/EnumApprovalFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OptionMasterListRelationFilter_1 = require("../inputs/OptionMasterListRelationFilter");
const ShiftManagementListRelationFilter_1 = require("../inputs/ShiftManagementListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ReservationWhereInput = exports.ReservationWhereInput = ReservationWhereInput_1 = class ReservationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReservationWhereInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReservationWhereInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReservationWhereInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ReservationWhereInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReservationWhereInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReservationWhereInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReservationWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ReservationWhereInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], ReservationWhereInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterListRelationFilter_1.OptionMasterListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterListRelationFilter_1.OptionMasterListRelationFilter)
], ReservationWhereInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter)
], ReservationWhereInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomNullableRelationFilter_1.ChatRoomNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomNullableRelationFilter_1.ChatRoomNullableRelationFilter)
], ReservationWhereInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressRelationFilter_1.AddressRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressRelationFilter_1.AddressRelationFilter)
], ReservationWhereInput.prototype, "address", void 0);
exports.ReservationWhereInput = ReservationWhereInput = ReservationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationWhereInput", {})
], ReservationWhereInput);
