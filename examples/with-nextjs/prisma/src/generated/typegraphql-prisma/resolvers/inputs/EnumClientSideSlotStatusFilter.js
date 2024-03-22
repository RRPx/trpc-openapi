"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumClientSideSlotStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumClientSideSlotStatusFilter_1 = require("../inputs/NestedEnumClientSideSlotStatusFilter");
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let EnumClientSideSlotStatusFilter = exports.EnumClientSideSlotStatusFilter = class EnumClientSideSlotStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumClientSideSlotStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumClientSideSlotStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumClientSideSlotStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter_1.NestedEnumClientSideSlotStatusFilter)
], EnumClientSideSlotStatusFilter.prototype, "not", void 0);
exports.EnumClientSideSlotStatusFilter = EnumClientSideSlotStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumClientSideSlotStatusFilter", {})
], EnumClientSideSlotStatusFilter);
