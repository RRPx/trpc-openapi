"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const Role_1 = require("../../enums/Role");
let EnumRoleFilter = exports.EnumRoleFilter = class EnumRoleFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], EnumRoleFilter.prototype, "not", void 0);
exports.EnumRoleFilter = EnumRoleFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRoleFilter", {})
], EnumRoleFilter);
