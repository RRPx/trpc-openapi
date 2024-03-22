"use strict";
var NestedEnumClientSideSlotStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumClientSideSlotStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumClientSideSlotStatusFilter_1 = require("../inputs/NestedEnumClientSideSlotStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let NestedEnumClientSideSlotStatusWithAggregatesFilter = exports.NestedEnumClientSideSlotStatusWithAggregatesFilter = NestedEnumClientSideSlotStatusWithAggregatesFilter_1 = class NestedEnumClientSideSlotStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusWithAggregatesFilter)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter)
], NestedEnumClientSideSlotStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumClientSideSlotStatusWithAggregatesFilter = NestedEnumClientSideSlotStatusWithAggregatesFilter = NestedEnumClientSideSlotStatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumClientSideSlotStatusWithAggregatesFilter", {})
], NestedEnumClientSideSlotStatusWithAggregatesFilter);
