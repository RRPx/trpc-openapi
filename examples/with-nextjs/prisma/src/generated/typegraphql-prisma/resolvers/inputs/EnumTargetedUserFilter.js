"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTargetedUserFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTargetedUserFilter_1 = require("../inputs/NestedEnumTargetedUserFilter");
const TargetedUser_1 = require("../../enums/TargetedUser");
let EnumTargetedUserFilter = exports.EnumTargetedUserFilter = class EnumTargetedUserFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTargetedUserFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTargetedUserFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTargetedUserFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter_1.NestedEnumTargetedUserFilter)
], EnumTargetedUserFilter.prototype, "not", void 0);
exports.EnumTargetedUserFilter = EnumTargetedUserFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTargetedUserFilter", {})
], EnumTargetedUserFilter);
