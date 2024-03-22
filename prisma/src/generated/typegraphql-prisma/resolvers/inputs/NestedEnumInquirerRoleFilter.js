"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumInquirerRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquirerRole_1 = require("../../enums/InquirerRole");
let NestedEnumInquirerRoleFilter = class NestedEnumInquirerRoleFilter {
};
exports.NestedEnumInquirerRoleFilter = NestedEnumInquirerRoleFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumInquirerRoleFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumInquirerRoleFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquirerRole_1.InquirerRole], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumInquirerRoleFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumInquirerRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumInquirerRoleFilter)
], NestedEnumInquirerRoleFilter.prototype, "not", void 0);
exports.NestedEnumInquirerRoleFilter = NestedEnumInquirerRoleFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumInquirerRoleFilter", {})
], NestedEnumInquirerRoleFilter);
