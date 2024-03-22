"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageOrderByWithAggregationInput_1 = require("../../../inputs/ChatMessageOrderByWithAggregationInput");
const ChatMessageScalarWhereWithAggregatesInput_1 = require("../../../inputs/ChatMessageScalarWhereWithAggregatesInput");
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
const ChatMessageScalarFieldEnum_1 = require("../../../../enums/ChatMessageScalarFieldEnum");
let GroupByChatMessageArgs = exports.GroupByChatMessageArgs = class GroupByChatMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], GroupByChatMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageOrderByWithAggregationInput_1.ChatMessageOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChatMessageArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarFieldEnum_1.ChatMessageScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChatMessageArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageScalarWhereWithAggregatesInput_1.ChatMessageScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageScalarWhereWithAggregatesInput_1.ChatMessageScalarWhereWithAggregatesInput)
], GroupByChatMessageArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChatMessageArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChatMessageArgs.prototype, "skip", void 0);
exports.GroupByChatMessageArgs = GroupByChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByChatMessageArgs);
