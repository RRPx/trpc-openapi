"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCountOrderByAggregateInput_1 = require("../inputs/ChatMessageCountOrderByAggregateInput");
const ChatMessageMaxOrderByAggregateInput_1 = require("../inputs/ChatMessageMaxOrderByAggregateInput");
const ChatMessageMinOrderByAggregateInput_1 = require("../inputs/ChatMessageMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChatMessageOrderByWithAggregationInput = exports.ChatMessageOrderByWithAggregationInput = class ChatMessageOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ChatMessageOrderByWithAggregationInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCountOrderByAggregateInput_1.ChatMessageCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCountOrderByAggregateInput_1.ChatMessageCountOrderByAggregateInput)
], ChatMessageOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMaxOrderByAggregateInput_1.ChatMessageMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMaxOrderByAggregateInput_1.ChatMessageMaxOrderByAggregateInput)
], ChatMessageOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMinOrderByAggregateInput_1.ChatMessageMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMinOrderByAggregateInput_1.ChatMessageMinOrderByAggregateInput)
], ChatMessageOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ChatMessageOrderByWithAggregationInput = ChatMessageOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageOrderByWithAggregationInput", {})
], ChatMessageOrderByWithAggregationInput);
