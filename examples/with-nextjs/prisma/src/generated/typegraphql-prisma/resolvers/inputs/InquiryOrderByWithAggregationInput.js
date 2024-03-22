"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryCountOrderByAggregateInput_1 = require("../inputs/InquiryCountOrderByAggregateInput");
const InquiryMaxOrderByAggregateInput_1 = require("../inputs/InquiryMaxOrderByAggregateInput");
const InquiryMinOrderByAggregateInput_1 = require("../inputs/InquiryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InquiryOrderByWithAggregationInput = exports.InquiryOrderByWithAggregationInput = class InquiryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "inquirerRole", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryCountOrderByAggregateInput_1.InquiryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryCountOrderByAggregateInput_1.InquiryCountOrderByAggregateInput)
], InquiryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMaxOrderByAggregateInput_1.InquiryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMaxOrderByAggregateInput_1.InquiryMaxOrderByAggregateInput)
], InquiryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMinOrderByAggregateInput_1.InquiryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMinOrderByAggregateInput_1.InquiryMinOrderByAggregateInput)
], InquiryOrderByWithAggregationInput.prototype, "_min", void 0);
exports.InquiryOrderByWithAggregationInput = InquiryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InquiryOrderByWithAggregationInput", {})
], InquiryOrderByWithAggregationInput);
