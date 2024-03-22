"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCountOrderByAggregateInput_1 = require("../inputs/NotificationCountOrderByAggregateInput");
const NotificationMaxOrderByAggregateInput_1 = require("../inputs/NotificationMaxOrderByAggregateInput");
const NotificationMinOrderByAggregateInput_1 = require("../inputs/NotificationMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationOrderByWithAggregationInput = exports.NotificationOrderByWithAggregationInput = class NotificationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], NotificationOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], NotificationOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], NotificationOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], NotificationOrderByWithAggregationInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCountOrderByAggregateInput_1.NotificationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCountOrderByAggregateInput_1.NotificationCountOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMaxOrderByAggregateInput_1.NotificationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMaxOrderByAggregateInput_1.NotificationMaxOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMinOrderByAggregateInput_1.NotificationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMinOrderByAggregateInput_1.NotificationMinOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_min", void 0);
exports.NotificationOrderByWithAggregationInput = NotificationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationOrderByWithAggregationInput", {})
], NotificationOrderByWithAggregationInput);
