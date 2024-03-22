"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumInquirerRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumInquirerRoleFilter_1 = require("../inputs/NestedEnumInquirerRoleFilter");
const NestedEnumInquirerRoleWithAggregatesFilter_1 = require("../inputs/NestedEnumInquirerRoleWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const InquirerRole_1 = require("../../enums/InquirerRole");
let EnumInquirerRoleWithAggregatesFilter = class EnumInquirerRoleWithAggregatesFilter {
};
exports.EnumInquirerRoleWithAggregatesFilter = EnumInquirerRoleWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumInquirerRoleWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumInquirerRoleWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumInquirerRoleWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleWithAggregatesFilter_1.NestedEnumInquirerRoleWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleWithAggregatesFilter_1.NestedEnumInquirerRoleWithAggregatesFilter)
], EnumInquirerRoleWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumInquirerRoleWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter)
], EnumInquirerRoleWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter)
], EnumInquirerRoleWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumInquirerRoleWithAggregatesFilter = EnumInquirerRoleWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumInquirerRoleWithAggregatesFilter", {})
], EnumInquirerRoleWithAggregatesFilter);
