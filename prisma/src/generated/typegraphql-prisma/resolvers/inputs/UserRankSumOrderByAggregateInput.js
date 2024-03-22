"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserRankSumOrderByAggregateInput = class UserRankSumOrderByAggregateInput {
};
exports.UserRankSumOrderByAggregateInput = UserRankSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankSumOrderByAggregateInput.prototype, "basic_fee", void 0);
exports.UserRankSumOrderByAggregateInput = UserRankSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankSumOrderByAggregateInput", {})
], UserRankSumOrderByAggregateInput);
