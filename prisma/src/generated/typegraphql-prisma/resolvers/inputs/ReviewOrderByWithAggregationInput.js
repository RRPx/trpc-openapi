"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCountOrderByAggregateInput_1 = require("../inputs/ReviewCountOrderByAggregateInput");
const ReviewMaxOrderByAggregateInput_1 = require("../inputs/ReviewMaxOrderByAggregateInput");
const ReviewMinOrderByAggregateInput_1 = require("../inputs/ReviewMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewOrderByWithAggregationInput = class ReviewOrderByWithAggregationInput {
};
exports.ReviewOrderByWithAggregationInput = ReviewOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCountOrderByAggregateInput_1.ReviewCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCountOrderByAggregateInput_1.ReviewCountOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMaxOrderByAggregateInput_1.ReviewMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMaxOrderByAggregateInput_1.ReviewMaxOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMinOrderByAggregateInput_1.ReviewMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMinOrderByAggregateInput_1.ReviewMinOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ReviewOrderByWithAggregationInput = ReviewOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewOrderByWithAggregationInput", {})
], ReviewOrderByWithAggregationInput);
