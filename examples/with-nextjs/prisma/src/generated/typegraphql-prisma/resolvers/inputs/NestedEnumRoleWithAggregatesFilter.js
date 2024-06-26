"use strict";
var NestedEnumRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Role_1 = require("../../enums/Role");
let NestedEnumRoleWithAggregatesFilter = exports.NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = class NestedEnumRoleWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRoleWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleWithAggregatesFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRoleWithAggregatesFilter", {})
], NestedEnumRoleWithAggregatesFilter);
