"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumClientSideSlotStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumClientSideSlotStatusFilter_1 = require("../inputs/NestedEnumClientSideSlotStatusFilter");
const NestedEnumClientSideSlotStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumClientSideSlotStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let EnumClientSideSlotStatusWithAggregatesFilter = class EnumClientSideSlotStatusWithAggregatesFilter {
};
exports.EnumClientSideSlotStatusWithAggregatesFilter = EnumClientSideSlotStatusWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusWithAggregatesFilter_1.NestedEnumClientSideSlotStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusWithAggregatesFilter_1.NestedEnumClientSideSlotStatusWithAggregatesFilter)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter)
], EnumClientSideSlotStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumClientSideSlotStatusWithAggregatesFilter = EnumClientSideSlotStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumClientSideSlotStatusWithAggregatesFilter", {})
], EnumClientSideSlotStatusWithAggregatesFilter);
