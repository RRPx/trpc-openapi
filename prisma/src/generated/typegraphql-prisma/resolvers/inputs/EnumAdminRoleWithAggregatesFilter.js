"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAdminRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAdminRoleFilter_1 = require("../inputs/NestedEnumAdminRoleFilter");
const NestedEnumAdminRoleWithAggregatesFilter_1 = require("../inputs/NestedEnumAdminRoleWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AdminRole_1 = require("../../enums/AdminRole");
let EnumAdminRoleWithAggregatesFilter = class EnumAdminRoleWithAggregatesFilter {
};
exports.EnumAdminRoleWithAggregatesFilter = EnumAdminRoleWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAdminRoleWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAdminRoleWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAdminRoleWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleWithAggregatesFilter_1.NestedEnumAdminRoleWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleWithAggregatesFilter_1.NestedEnumAdminRoleWithAggregatesFilter)
], EnumAdminRoleWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumAdminRoleWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter)
], EnumAdminRoleWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter)
], EnumAdminRoleWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumAdminRoleWithAggregatesFilter = EnumAdminRoleWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAdminRoleWithAggregatesFilter", {})
], EnumAdminRoleWithAggregatesFilter);
