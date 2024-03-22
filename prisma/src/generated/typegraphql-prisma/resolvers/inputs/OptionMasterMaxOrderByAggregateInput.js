"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OptionMasterMaxOrderByAggregateInput = class OptionMasterMaxOrderByAggregateInput {
};
exports.OptionMasterMaxOrderByAggregateInput = OptionMasterMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxOrderByAggregateInput.prototype, "updated_at", void 0);
exports.OptionMasterMaxOrderByAggregateInput = OptionMasterMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterMaxOrderByAggregateInput", {})
], OptionMasterMaxOrderByAggregateInput);
