"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationWhereUniqueInput = void 0;
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
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
const ShiftManagementListRelationFilter_1 = require("../inputs/ShiftManagementListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ReservationWhereUniqueInput = class ReservationWhereUniqueInput {
};
exports.ReservationWhereUniqueInput = ReservationWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationWhereUniqueInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationWhereUniqueInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1.ReservationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1.ReservationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1.ReservationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReservationWhereUniqueInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereUniqueInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereUniqueInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReservationWhereUniqueInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReservationWhereUniqueInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReservationWhereUniqueInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ReservationWhereUniqueInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReservationWhereUniqueInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReservationWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereUniqueInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReservationWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ReservationWhereUniqueInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], ReservationWhereUniqueInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterListRelationFilter_1.OptionMasterListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterListRelationFilter_1.OptionMasterListRelationFilter)
], ReservationWhereUniqueInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementListRelationFilter_1.ShiftManagementListRelationFilter)
], ReservationWhereUniqueInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomNullableRelationFilter_1.ChatRoomNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomNullableRelationFilter_1.ChatRoomNullableRelationFilter)
], ReservationWhereUniqueInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressRelationFilter_1.AddressRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressRelationFilter_1.AddressRelationFilter)
], ReservationWhereUniqueInput.prototype, "address", void 0);
exports.ReservationWhereUniqueInput = ReservationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationWhereUniqueInput", {})
], ReservationWhereUniqueInput);
