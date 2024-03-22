"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumInquirerRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumInquirerRoleFilter_1 = require("../inputs/NestedEnumInquirerRoleFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const InquirerRole_1 = require("../../enums/InquirerRole");
let NestedEnumInquirerRoleWithAggregatesFilter = class NestedEnumInquirerRoleWithAggregatesFilter {
};
exports.NestedEnumInquirerRoleWithAggregatesFilter = NestedEnumInquirerRoleWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleWithAggregatesFilter)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter)
], NestedEnumInquirerRoleWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumInquirerRoleWithAggregatesFilter = NestedEnumInquirerRoleWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumInquirerRoleWithAggregatesFilter", {})
], NestedEnumInquirerRoleWithAggregatesFilter);
