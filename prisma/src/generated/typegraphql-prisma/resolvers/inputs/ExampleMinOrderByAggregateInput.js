"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExampleMinOrderByAggregateInput = class ExampleMinOrderByAggregateInput {
};
exports.ExampleMinOrderByAggregateInput = ExampleMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.ExampleMinOrderByAggregateInput = ExampleMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleMinOrderByAggregateInput", {})
], ExampleMinOrderByAggregateInput);
