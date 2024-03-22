"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationAvgOrderByAggregateInput_1 = require("../inputs/ReservationAvgOrderByAggregateInput");
const ReservationCountOrderByAggregateInput_1 = require("../inputs/ReservationCountOrderByAggregateInput");
const ReservationMaxOrderByAggregateInput_1 = require("../inputs/ReservationMaxOrderByAggregateInput");
const ReservationMinOrderByAggregateInput_1 = require("../inputs/ReservationMinOrderByAggregateInput");
const ReservationSumOrderByAggregateInput_1 = require("../inputs/ReservationSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReservationOrderByWithAggregationInput = exports.ReservationOrderByWithAggregationInput = class ReservationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ReservationOrderByWithAggregationInput.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ReservationOrderByWithAggregationInput.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCountOrderByAggregateInput_1.ReservationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCountOrderByAggregateInput_1.ReservationCountOrderByAggregateInput)
], ReservationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationAvgOrderByAggregateInput_1.ReservationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationAvgOrderByAggregateInput_1.ReservationAvgOrderByAggregateInput)
], ReservationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMaxOrderByAggregateInput_1.ReservationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMaxOrderByAggregateInput_1.ReservationMaxOrderByAggregateInput)
], ReservationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMinOrderByAggregateInput_1.ReservationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMinOrderByAggregateInput_1.ReservationMinOrderByAggregateInput)
], ReservationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationSumOrderByAggregateInput_1.ReservationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationSumOrderByAggregateInput_1.ReservationSumOrderByAggregateInput)
], ReservationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ReservationOrderByWithAggregationInput = ReservationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationOrderByWithAggregationInput", {})
], ReservationOrderByWithAggregationInput);
