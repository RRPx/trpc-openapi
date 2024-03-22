"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CastInformationAvgOrderByAggregateInput = class CastInformationAvgOrderByAggregateInput {
};
exports.CastInformationAvgOrderByAggregateInput = CastInformationAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationAvgOrderByAggregateInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationAvgOrderByAggregateInput.prototype, "height", void 0);
exports.CastInformationAvgOrderByAggregateInput = CastInformationAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationAvgOrderByAggregateInput", {})
], CastInformationAvgOrderByAggregateInput);
