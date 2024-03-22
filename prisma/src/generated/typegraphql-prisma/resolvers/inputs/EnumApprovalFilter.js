"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumApprovalFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumApprovalFilter_1 = require("../inputs/NestedEnumApprovalFilter");
const Approval_1 = require("../../enums/Approval");
let EnumApprovalFilter = class EnumApprovalFilter {
};
exports.EnumApprovalFilter = EnumApprovalFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumApprovalFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumApprovalFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumApprovalFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1.NestedEnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter_1.NestedEnumApprovalFilter)
], EnumApprovalFilter.prototype, "not", void 0);
exports.EnumApprovalFilter = EnumApprovalFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumApprovalFilter", {})
], EnumApprovalFilter);
