"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressOrderByWithRelationInput_1 = require("../inputs/AddressOrderByWithRelationInput");
const CastOrderByWithRelationInput_1 = require("../inputs/CastOrderByWithRelationInput");
const ChatRoomOrderByWithRelationInput_1 = require("../inputs/ChatRoomOrderByWithRelationInput");
const ClientOrderByWithRelationInput_1 = require("../inputs/ClientOrderByWithRelationInput");
const OptionMasterOrderByRelationAggregateInput_1 = require("../inputs/OptionMasterOrderByRelationAggregateInput");
const ShiftManagementOrderByRelationAggregateInput_1 = require("../inputs/ShiftManagementOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReservationOrderByWithRelationInput = class ReservationOrderByWithRelationInput {
};
exports.ReservationOrderByWithRelationInput = ReservationOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ReservationOrderByWithRelationInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ReservationOrderByWithRelationInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByWithRelationInput_1.CastOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByWithRelationInput_1.CastOrderByWithRelationInput)
], ReservationOrderByWithRelationInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput)
], ReservationOrderByWithRelationInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterOrderByRelationAggregateInput_1.OptionMasterOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterOrderByRelationAggregateInput_1.OptionMasterOrderByRelationAggregateInput)
], ReservationOrderByWithRelationInput.prototype, "option_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementOrderByRelationAggregateInput_1.ShiftManagementOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementOrderByRelationAggregateInput_1.ShiftManagementOrderByRelationAggregateInput)
], ReservationOrderByWithRelationInput.prototype, "shift_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput)
], ReservationOrderByWithRelationInput.prototype, "chat_room", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressOrderByWithRelationInput_1.AddressOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressOrderByWithRelationInput_1.AddressOrderByWithRelationInput)
], ReservationOrderByWithRelationInput.prototype, "address", void 0);
exports.ReservationOrderByWithRelationInput = ReservationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationOrderByWithRelationInput", {})
], ReservationOrderByWithRelationInput);
