"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeFilter_1 = require("../inputs/NestedEnumUserTypeFilter");
const UserType_1 = require("../../enums/UserType");
let EnumUserTypeFilter = class EnumUserTypeFilter {
};
exports.EnumUserTypeFilter = EnumUserTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter)
], EnumUserTypeFilter.prototype, "not", void 0);
exports.EnumUserTypeFilter = EnumUserTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserTypeFilter", {})
], EnumUserTypeFilter);
