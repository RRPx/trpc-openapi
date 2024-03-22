"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTargetedUserWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTargetedUserFilter_1 = require("../inputs/NestedEnumTargetedUserFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TargetedUser_1 = require("../../enums/TargetedUser");
let NestedEnumTargetedUserWithAggregatesFilter = class NestedEnumTargetedUserWithAggregatesFilter {
};
exports.NestedEnumTargetedUserWithAggregatesFilter = NestedEnumTargetedUserWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserWithAggregatesFilter)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter)
], NestedEnumTargetedUserWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumTargetedUserWithAggregatesFilter = NestedEnumTargetedUserWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTargetedUserWithAggregatesFilter", {})
], NestedEnumTargetedUserWithAggregatesFilter);
