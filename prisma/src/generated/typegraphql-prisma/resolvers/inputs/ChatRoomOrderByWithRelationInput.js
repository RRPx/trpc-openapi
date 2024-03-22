"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageOrderByRelationAggregateInput_1 = require("../inputs/ChatMessageOrderByRelationAggregateInput");
const ReservationOrderByWithRelationInput_1 = require("../inputs/ReservationOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChatRoomOrderByWithRelationInput = class ChatRoomOrderByWithRelationInput {
};
exports.ChatRoomOrderByWithRelationInput = ChatRoomOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithRelationInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput)
], ChatRoomOrderByWithRelationInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageOrderByRelationAggregateInput_1.ChatMessageOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageOrderByRelationAggregateInput_1.ChatMessageOrderByRelationAggregateInput)
], ChatRoomOrderByWithRelationInput.prototype, "messages", void 0);
exports.ChatRoomOrderByWithRelationInput = ChatRoomOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomOrderByWithRelationInput", {})
], ChatRoomOrderByWithRelationInput);
