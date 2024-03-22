"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAdminRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAdminRoleFilter_1 = require("../inputs/NestedEnumAdminRoleFilter");
const AdminRole_1 = require("../../enums/AdminRole");
let EnumAdminRoleFilter = exports.EnumAdminRoleFilter = class EnumAdminRoleFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAdminRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAdminRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAdminRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter_1.NestedEnumAdminRoleFilter)
], EnumAdminRoleFilter.prototype, "not", void 0);
exports.EnumAdminRoleFilter = EnumAdminRoleFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAdminRoleFilter", {})
], EnumAdminRoleFilter);
