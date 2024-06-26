"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserRankAvgOrderByAggregateInput = exports.UserRankAvgOrderByAggregateInput = class UserRankAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankAvgOrderByAggregateInput.prototype, "basic_fee", void 0);
exports.UserRankAvgOrderByAggregateInput = UserRankAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankAvgOrderByAggregateInput", {})
], UserRankAvgOrderByAggregateInput);
