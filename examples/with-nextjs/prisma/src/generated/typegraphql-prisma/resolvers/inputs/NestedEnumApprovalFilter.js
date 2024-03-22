"use strict";
var NestedEnumApprovalFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumApprovalFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Approval_1 = require("../../enums/Approval");
let NestedEnumApprovalFilter = exports.NestedEnumApprovalFilter = NestedEnumApprovalFilter_1 = class NestedEnumApprovalFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumApprovalFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumApprovalFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Approval_1.Approval], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumApprovalFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumApprovalFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumApprovalFilter)
], NestedEnumApprovalFilter.prototype, "not", void 0);
exports.NestedEnumApprovalFilter = NestedEnumApprovalFilter = NestedEnumApprovalFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumApprovalFilter", {})
], NestedEnumApprovalFilter);
