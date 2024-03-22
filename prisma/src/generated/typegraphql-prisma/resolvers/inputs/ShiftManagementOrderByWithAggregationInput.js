"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCountOrderByAggregateInput_1 = require("../inputs/ShiftManagementCountOrderByAggregateInput");
const ShiftManagementMaxOrderByAggregateInput_1 = require("../inputs/ShiftManagementMaxOrderByAggregateInput");
const ShiftManagementMinOrderByAggregateInput_1 = require("../inputs/ShiftManagementMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShiftManagementOrderByWithAggregationInput = class ShiftManagementOrderByWithAggregationInput {
};
exports.ShiftManagementOrderByWithAggregationInput = ShiftManagementOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "shift_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "cast_side_reservation_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "client_side_slot_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShiftManagementOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "reservationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCountOrderByAggregateInput_1.ShiftManagementCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCountOrderByAggregateInput_1.ShiftManagementCountOrderByAggregateInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMaxOrderByAggregateInput_1.ShiftManagementMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMaxOrderByAggregateInput_1.ShiftManagementMaxOrderByAggregateInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMinOrderByAggregateInput_1.ShiftManagementMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMinOrderByAggregateInput_1.ShiftManagementMinOrderByAggregateInput)
], ShiftManagementOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ShiftManagementOrderByWithAggregationInput = ShiftManagementOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementOrderByWithAggregationInput", {})
], ShiftManagementOrderByWithAggregationInput);
