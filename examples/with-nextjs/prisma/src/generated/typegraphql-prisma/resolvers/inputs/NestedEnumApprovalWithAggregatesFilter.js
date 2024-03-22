"use strict";
var NestedEnumApprovalWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumApprovalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumApprovalFilter_1 = require("../inputs/NestedEnumApprovalFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Approval_1 = require("../../enums/Approval");
let NestedEnumApprovalWithAggregatesFilter = exports.NestedEnumApprovalWithAggregatesFilter = NestedEnumApprovalWithAggregatesFilter_1 = class NestedEnumApprovalWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumApprovalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumApprovalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumApprovalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalWithAggregatesFilter)
], NestedEnumApprovalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumApprovalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1.NestedEnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter_1.NestedEnumApprovalFilter)
], NestedEnumApprovalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1.NestedEnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter_1.NestedEnumApprovalFilter)
], NestedEnumApprovalWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumApprovalWithAggregatesFilter = NestedEnumApprovalWithAggregatesFilter = NestedEnumApprovalWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumApprovalWithAggregatesFilter", {})
], NestedEnumApprovalWithAggregatesFilter);
