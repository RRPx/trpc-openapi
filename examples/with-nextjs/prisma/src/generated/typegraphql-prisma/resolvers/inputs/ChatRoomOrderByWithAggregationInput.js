"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCountOrderByAggregateInput_1 = require("../inputs/ChatRoomCountOrderByAggregateInput");
const ChatRoomMaxOrderByAggregateInput_1 = require("../inputs/ChatRoomMaxOrderByAggregateInput");
const ChatRoomMinOrderByAggregateInput_1 = require("../inputs/ChatRoomMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChatRoomOrderByWithAggregationInput = exports.ChatRoomOrderByWithAggregationInput = class ChatRoomOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithAggregationInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCountOrderByAggregateInput_1.ChatRoomCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCountOrderByAggregateInput_1.ChatRoomCountOrderByAggregateInput)
], ChatRoomOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMaxOrderByAggregateInput_1.ChatRoomMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMaxOrderByAggregateInput_1.ChatRoomMaxOrderByAggregateInput)
], ChatRoomOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMinOrderByAggregateInput_1.ChatRoomMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMinOrderByAggregateInput_1.ChatRoomMinOrderByAggregateInput)
], ChatRoomOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ChatRoomOrderByWithAggregationInput = ChatRoomOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomOrderByWithAggregationInput", {})
], ChatRoomOrderByWithAggregationInput);
