"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeFilter_1 = require("../inputs/NestedEnumUserTypeFilter");
const NestedEnumUserTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumUserTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserType_1 = require("../../enums/UserType");
let EnumUserTypeWithAggregatesFilter = exports.EnumUserTypeWithAggregatesFilter = class EnumUserTypeWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeWithAggregatesFilter_1.NestedEnumUserTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeWithAggregatesFilter_1.NestedEnumUserTypeWithAggregatesFilter)
], EnumUserTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumUserTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter)
], EnumUserTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter)
], EnumUserTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumUserTypeWithAggregatesFilter = EnumUserTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserTypeWithAggregatesFilter", {})
], EnumUserTypeWithAggregatesFilter);
