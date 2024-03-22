"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShiftManagement = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCountAggregate_1 = require("../outputs/ShiftManagementCountAggregate");
const ShiftManagementMaxAggregate_1 = require("../outputs/ShiftManagementMaxAggregate");
const ShiftManagementMinAggregate_1 = require("../outputs/ShiftManagementMinAggregate");
let AggregateShiftManagement = exports.AggregateShiftManagement = class AggregateShiftManagement {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCountAggregate_1.ShiftManagementCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCountAggregate_1.ShiftManagementCountAggregate)
], AggregateShiftManagement.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMinAggregate_1.ShiftManagementMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMinAggregate_1.ShiftManagementMinAggregate)
], AggregateShiftManagement.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementMaxAggregate_1.ShiftManagementMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementMaxAggregate_1.ShiftManagementMaxAggregate)
], AggregateShiftManagement.prototype, "_max", void 0);
exports.AggregateShiftManagement = AggregateShiftManagement = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShiftManagement", {})
], AggregateShiftManagement);
