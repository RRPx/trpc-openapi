"use strict";
var NestedEnumRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Role_1 = require("../../enums/Role");
let NestedEnumRoleFilter = exports.NestedEnumRoleFilter = NestedEnumRoleFilter_1 = class NestedEnumRoleFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleFilter)
], NestedEnumRoleFilter.prototype, "not", void 0);
exports.NestedEnumRoleFilter = NestedEnumRoleFilter = NestedEnumRoleFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRoleFilter", {})
], NestedEnumRoleFilter);
