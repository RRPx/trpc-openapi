"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserRankAvgOrderByAggregateInput_1 = require("../inputs/UserRankAvgOrderByAggregateInput");
const UserRankCountOrderByAggregateInput_1 = require("../inputs/UserRankCountOrderByAggregateInput");
const UserRankMaxOrderByAggregateInput_1 = require("../inputs/UserRankMaxOrderByAggregateInput");
const UserRankMinOrderByAggregateInput_1 = require("../inputs/UserRankMinOrderByAggregateInput");
const UserRankSumOrderByAggregateInput_1 = require("../inputs/UserRankSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserRankOrderByWithAggregationInput = class UserRankOrderByWithAggregationInput {
};
exports.UserRankOrderByWithAggregationInput = UserRankOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserRankOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserRankOrderByWithAggregationInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCountOrderByAggregateInput_1.UserRankCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankCountOrderByAggregateInput_1.UserRankCountOrderByAggregateInput)
], UserRankOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankAvgOrderByAggregateInput_1.UserRankAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankAvgOrderByAggregateInput_1.UserRankAvgOrderByAggregateInput)
], UserRankOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMaxOrderByAggregateInput_1.UserRankMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMaxOrderByAggregateInput_1.UserRankMaxOrderByAggregateInput)
], UserRankOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMinOrderByAggregateInput_1.UserRankMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMinOrderByAggregateInput_1.UserRankMinOrderByAggregateInput)
], UserRankOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankSumOrderByAggregateInput_1.UserRankSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankSumOrderByAggregateInput_1.UserRankSumOrderByAggregateInput)
], UserRankOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.UserRankOrderByWithAggregationInput = UserRankOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankOrderByWithAggregationInput", {})
], UserRankOrderByWithAggregationInput);
