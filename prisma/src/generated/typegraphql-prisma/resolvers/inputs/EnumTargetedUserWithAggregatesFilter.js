"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTargetedUserWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTargetedUserFilter_1 = require("../inputs/NestedEnumTargetedUserFilter");
const NestedEnumTargetedUserWithAggregatesFilter_1 = require("../inputs/NestedEnumTargetedUserWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TargetedUser_1 = require("../../enums/TargetedUser");
let EnumTargetedUserWithAggregatesFilter = class EnumTargetedUserWithAggregatesFilter {
};
exports.EnumTargetedUserWithAggregatesFilter = EnumTargetedUserWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTargetedUserWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTargetedUserWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTargetedUserWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserWithAggregatesFilter_1.NestedEnumTargetedUserWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserWithAggregatesFilter_1.NestedEnumTargetedUserWithAggregatesFilter)
], EnumTargetedUserWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumTargetedUserWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter)
], EnumTargetedUserWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter)
], EnumTargetedUserWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumTargetedUserWithAggregatesFilter = EnumTargetedUserWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTargetedUserWithAggregatesFilter", {})
], EnumTargetedUserWithAggregatesFilter);
