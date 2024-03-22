"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OptionMasterAvgOrderByAggregateInput = class OptionMasterAvgOrderByAggregateInput {
};
exports.OptionMasterAvgOrderByAggregateInput = OptionMasterAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterAvgOrderByAggregateInput.prototype, "fee", void 0);
exports.OptionMasterAvgOrderByAggregateInput = OptionMasterAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterAvgOrderByAggregateInput", {})
], OptionMasterAvgOrderByAggregateInput);
