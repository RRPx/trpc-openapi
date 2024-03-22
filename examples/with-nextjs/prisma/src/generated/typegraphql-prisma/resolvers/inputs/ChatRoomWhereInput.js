"use strict";
var ChatRoomWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageListRelationFilter_1 = require("../inputs/ChatMessageListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReservationRelationFilter_1 = require("../inputs/ReservationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ChatRoomWhereInput = exports.ChatRoomWhereInput = ChatRoomWhereInput_1 = class ChatRoomWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatRoomWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ChatRoomWhereInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatRoomWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatRoomWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationRelationFilter_1.ReservationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationRelationFilter_1.ReservationRelationFilter)
], ChatRoomWhereInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageListRelationFilter_1.ChatMessageListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageListRelationFilter_1.ChatMessageListRelationFilter)
], ChatRoomWhereInput.prototype, "messages", void 0);
exports.ChatRoomWhereInput = ChatRoomWhereInput = ChatRoomWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomWhereInput", {})
], ChatRoomWhereInput);
