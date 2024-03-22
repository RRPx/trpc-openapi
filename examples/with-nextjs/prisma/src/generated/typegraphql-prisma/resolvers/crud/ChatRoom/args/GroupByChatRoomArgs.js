"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomOrderByWithAggregationInput_1 = require("../../../inputs/ChatRoomOrderByWithAggregationInput");
const ChatRoomScalarWhereWithAggregatesInput_1 = require("../../../inputs/ChatRoomScalarWhereWithAggregatesInput");
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
const ChatRoomScalarFieldEnum_1 = require("../../../../enums/ChatRoomScalarFieldEnum");
let GroupByChatRoomArgs = exports.GroupByChatRoomArgs = class GroupByChatRoomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], GroupByChatRoomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomOrderByWithAggregationInput_1.ChatRoomOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChatRoomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomScalarFieldEnum_1.ChatRoomScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChatRoomArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomScalarWhereWithAggregatesInput_1.ChatRoomScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomScalarWhereWithAggregatesInput_1.ChatRoomScalarWhereWithAggregatesInput)
], GroupByChatRoomArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChatRoomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChatRoomArgs.prototype, "skip", void 0);
exports.GroupByChatRoomArgs = GroupByChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByChatRoomArgs);
