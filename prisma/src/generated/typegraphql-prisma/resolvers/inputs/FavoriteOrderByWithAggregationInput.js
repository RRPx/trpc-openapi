"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCountOrderByAggregateInput_1 = require("../inputs/FavoriteCountOrderByAggregateInput");
const FavoriteMaxOrderByAggregateInput_1 = require("../inputs/FavoriteMaxOrderByAggregateInput");
const FavoriteMinOrderByAggregateInput_1 = require("../inputs/FavoriteMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FavoriteOrderByWithAggregationInput = class FavoriteOrderByWithAggregationInput {
};
exports.FavoriteOrderByWithAggregationInput = FavoriteOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FavoriteOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FavoriteOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCountOrderByAggregateInput_1.FavoriteCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCountOrderByAggregateInput_1.FavoriteCountOrderByAggregateInput)
], FavoriteOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMaxOrderByAggregateInput_1.FavoriteMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMaxOrderByAggregateInput_1.FavoriteMaxOrderByAggregateInput)
], FavoriteOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMinOrderByAggregateInput_1.FavoriteMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMinOrderByAggregateInput_1.FavoriteMinOrderByAggregateInput)
], FavoriteOrderByWithAggregationInput.prototype, "_min", void 0);
exports.FavoriteOrderByWithAggregationInput = FavoriteOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteOrderByWithAggregationInput", {})
], FavoriteOrderByWithAggregationInput);
