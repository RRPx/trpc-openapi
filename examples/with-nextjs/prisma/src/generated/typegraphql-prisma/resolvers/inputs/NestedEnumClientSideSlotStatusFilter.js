"use strict";
var NestedEnumClientSideSlotStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumClientSideSlotStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let NestedEnumClientSideSlotStatusFilter = exports.NestedEnumClientSideSlotStatusFilter = NestedEnumClientSideSlotStatusFilter_1 = class NestedEnumClientSideSlotStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumClientSideSlotStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumClientSideSlotStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientSideSlotStatus_1.ClientSideSlotStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumClientSideSlotStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumClientSideSlotStatusFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumClientSideSlotStatusFilter)
], NestedEnumClientSideSlotStatusFilter.prototype, "not", void 0);
exports.NestedEnumClientSideSlotStatusFilter = NestedEnumClientSideSlotStatusFilter = NestedEnumClientSideSlotStatusFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumClientSideSlotStatusFilter", {})
], NestedEnumClientSideSlotStatusFilter);
