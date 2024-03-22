"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumInquirerRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumInquirerRoleFilter_1 = require("../inputs/NestedEnumInquirerRoleFilter");
const InquirerRole_1 = require("../../enums/InquirerRole");
let EnumInquirerRoleFilter = class EnumInquirerRoleFilter {
};
exports.EnumInquirerRoleFilter = EnumInquirerRoleFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumInquirerRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumInquirerRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumInquirerRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter_1.NestedEnumInquirerRoleFilter)
], EnumInquirerRoleFilter.prototype, "not", void 0);
exports.EnumInquirerRoleFilter = EnumInquirerRoleFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumInquirerRoleFilter", {})
], EnumInquirerRoleFilter);
