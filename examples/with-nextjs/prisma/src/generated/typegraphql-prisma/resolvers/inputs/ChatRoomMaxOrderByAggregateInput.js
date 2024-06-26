"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChatRoomMaxOrderByAggregateInput = exports.ChatRoomMaxOrderByAggregateInput = class ChatRoomMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxOrderByAggregateInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxOrderByAggregateInput.prototype, "updated_at", void 0);
exports.ChatRoomMaxOrderByAggregateInput = ChatRoomMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomMaxOrderByAggregateInput", {})
], ChatRoomMaxOrderByAggregateInput);
