"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleAvgOrderByAggregateInput_1 = require("../inputs/ExampleAvgOrderByAggregateInput");
const ExampleCountOrderByAggregateInput_1 = require("../inputs/ExampleCountOrderByAggregateInput");
const ExampleMaxOrderByAggregateInput_1 = require("../inputs/ExampleMaxOrderByAggregateInput");
const ExampleMinOrderByAggregateInput_1 = require("../inputs/ExampleMinOrderByAggregateInput");
const ExampleSumOrderByAggregateInput_1 = require("../inputs/ExampleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ExampleOrderByWithAggregationInput = exports.ExampleOrderByWithAggregationInput = class ExampleOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleCountOrderByAggregateInput_1.ExampleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleCountOrderByAggregateInput_1.ExampleCountOrderByAggregateInput)
], ExampleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleAvgOrderByAggregateInput_1.ExampleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleAvgOrderByAggregateInput_1.ExampleAvgOrderByAggregateInput)
], ExampleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMaxOrderByAggregateInput_1.ExampleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMaxOrderByAggregateInput_1.ExampleMaxOrderByAggregateInput)
], ExampleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMinOrderByAggregateInput_1.ExampleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMinOrderByAggregateInput_1.ExampleMinOrderByAggregateInput)
], ExampleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleSumOrderByAggregateInput_1.ExampleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleSumOrderByAggregateInput_1.ExampleSumOrderByAggregateInput)
], ExampleOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ExampleOrderByWithAggregationInput = ExampleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleOrderByWithAggregationInput", {})
], ExampleOrderByWithAggregationInput);
