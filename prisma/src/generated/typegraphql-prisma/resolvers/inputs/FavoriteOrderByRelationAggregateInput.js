"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FavoriteOrderByRelationAggregateInput = class FavoriteOrderByRelationAggregateInput {
};
exports.FavoriteOrderByRelationAggregateInput = FavoriteOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.FavoriteOrderByRelationAggregateInput = FavoriteOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteOrderByRelationAggregateInput", {})
], FavoriteOrderByRelationAggregateInput);
