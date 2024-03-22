"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeFilter_1 = require("../inputs/NestedEnumUserTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserType_1 = require("../../enums/UserType");
let NestedEnumUserTypeWithAggregatesFilter = class NestedEnumUserTypeWithAggregatesFilter {
};
exports.NestedEnumUserTypeWithAggregatesFilter = NestedEnumUserTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeWithAggregatesFilter)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter_1.NestedEnumUserTypeFilter)
], NestedEnumUserTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumUserTypeWithAggregatesFilter = NestedEnumUserTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserTypeWithAggregatesFilter", {})
], NestedEnumUserTypeWithAggregatesFilter);
