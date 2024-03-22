"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumApprovalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumApprovalFilter_1 = require("../inputs/NestedEnumApprovalFilter");
const NestedEnumApprovalWithAggregatesFilter_1 = require("../inputs/NestedEnumApprovalWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Approval_1 = require("../../enums/Approval");
let EnumApprovalWithAggregatesFilter = class EnumApprovalWithAggregatesFilter {
};
exports.EnumApprovalWithAggregatesFilter = EnumApprovalWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumApprovalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumApprovalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumApprovalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalWithAggregatesFilter_1.NestedEnumApprovalWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalWithAggregatesFilter_1.NestedEnumApprovalWithAggregatesFilter)
], EnumApprovalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumApprovalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1.NestedEnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter_1.NestedEnumApprovalFilter)
], EnumApprovalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1.NestedEnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter_1.NestedEnumApprovalFilter)
], EnumApprovalWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumApprovalWithAggregatesFilter = EnumApprovalWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumApprovalWithAggregatesFilter", {})
], EnumApprovalWithAggregatesFilter);
