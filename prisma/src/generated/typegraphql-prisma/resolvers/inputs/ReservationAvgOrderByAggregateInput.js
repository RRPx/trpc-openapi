"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReservationAvgOrderByAggregateInput = class ReservationAvgOrderByAggregateInput {
};
exports.ReservationAvgOrderByAggregateInput = ReservationAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationAvgOrderByAggregateInput.prototype, "payment_amount", void 0);
exports.ReservationAvgOrderByAggregateInput = ReservationAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationAvgOrderByAggregateInput", {})
], ReservationAvgOrderByAggregateInput);
