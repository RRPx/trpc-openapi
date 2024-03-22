"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CastInformationSumOrderByAggregateInput = exports.CastInformationSumOrderByAggregateInput = class CastInformationSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationSumOrderByAggregateInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationSumOrderByAggregateInput.prototype, "height", void 0);
exports.CastInformationSumOrderByAggregateInput = CastInformationSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationSumOrderByAggregateInput", {})
], CastInformationSumOrderByAggregateInput);
