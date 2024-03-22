"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageListRelationFilter_1 = require("../inputs/ChatMessageListRelationFilter");
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReservationRelationFilter_1 = require("../inputs/ReservationRelationFilter");
let ChatRoomWhereUniqueInput = exports.ChatRoomWhereUniqueInput = class ChatRoomWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomWhereUniqueInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1.ChatRoomWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1.ChatRoomWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomWhereInput_1.ChatRoomWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatRoomWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ChatRoomWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationRelationFilter_1.ReservationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationRelationFilter_1.ReservationRelationFilter)
], ChatRoomWhereUniqueInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageListRelationFilter_1.ChatMessageListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageListRelationFilter_1.ChatMessageListRelationFilter)
], ChatRoomWhereUniqueInput.prototype, "messages", void 0);
exports.ChatRoomWhereUniqueInput = ChatRoomWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomWhereUniqueInput", {})
], ChatRoomWhereUniqueInput);
