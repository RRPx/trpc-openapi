"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OptionMasterMinOrderByAggregateInput = exports.OptionMasterMinOrderByAggregateInput = class OptionMasterMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMinOrderByAggregateInput.prototype, "updated_at", void 0);
exports.OptionMasterMinOrderByAggregateInput = OptionMasterMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterMinOrderByAggregateInput", {})
], OptionMasterMinOrderByAggregateInput);
