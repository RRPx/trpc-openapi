"use strict";
var NestedEnumAdminRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAdminRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAdminRoleFilter_1 = require("../inputs/NestedEnumAdminRoleFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AdminRole_1 = require("../../enums/AdminRole");
let NestedEnumAdminRoleWithAggregatesFilter = exports.NestedEnumAdminRoleWithAggregatesFilter = NestedEnumAdminRoleWithAggregatesFilter_1 = class NestedEnumAdminRoleWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleWithAggregatesFilter)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter)
], NestedEnumAdminRoleWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumAdminRoleWithAggregatesFilter = NestedEnumAdminRoleWithAggregatesFilter = NestedEnumAdminRoleWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAdminRoleWithAggregatesFilter", {})
], NestedEnumAdminRoleWithAggregatesFilter);
