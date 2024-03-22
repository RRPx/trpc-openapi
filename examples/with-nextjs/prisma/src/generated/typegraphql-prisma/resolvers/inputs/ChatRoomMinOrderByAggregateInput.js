"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChatRoomMinOrderByAggregateInput = exports.ChatRoomMinOrderByAggregateInput = class ChatRoomMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinOrderByAggregateInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinOrderByAggregateInput.prototype, "updated_at", void 0);
exports.ChatRoomMinOrderByAggregateInput = ChatRoomMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomMinOrderByAggregateInput", {})
], ChatRoomMinOrderByAggregateInput);
