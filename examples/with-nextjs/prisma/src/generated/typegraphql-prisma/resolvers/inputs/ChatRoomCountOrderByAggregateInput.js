"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChatRoomCountOrderByAggregateInput = exports.ChatRoomCountOrderByAggregateInput = class ChatRoomCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCountOrderByAggregateInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCountOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCountOrderByAggregateInput.prototype, "updated_at", void 0);
exports.ChatRoomCountOrderByAggregateInput = ChatRoomCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCountOrderByAggregateInput", {})
], ChatRoomCountOrderByAggregateInput);
