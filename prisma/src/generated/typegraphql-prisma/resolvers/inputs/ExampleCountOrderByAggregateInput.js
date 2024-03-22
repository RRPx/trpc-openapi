"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExampleCountOrderByAggregateInput = class ExampleCountOrderByAggregateInput {
};
exports.ExampleCountOrderByAggregateInput = ExampleCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.ExampleCountOrderByAggregateInput = ExampleCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleCountOrderByAggregateInput", {})
], ExampleCountOrderByAggregateInput);
