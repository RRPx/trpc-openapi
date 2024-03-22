"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAdminRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminRole_1 = require("../../enums/AdminRole");
let NestedEnumAdminRoleFilter = class NestedEnumAdminRoleFilter {
};
exports.NestedEnumAdminRoleFilter = NestedEnumAdminRoleFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAdminRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAdminRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminRole_1.AdminRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAdminRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAdminRoleFilter)
], NestedEnumAdminRoleFilter.prototype, "not", void 0);
exports.NestedEnumAdminRoleFilter = NestedEnumAdminRoleFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAdminRoleFilter", {})
], NestedEnumAdminRoleFilter);
