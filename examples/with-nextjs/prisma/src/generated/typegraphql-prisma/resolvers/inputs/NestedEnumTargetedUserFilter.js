"use strict";
var NestedEnumTargetedUserFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTargetedUserFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetedUser_1 = require("../../enums/TargetedUser");
let NestedEnumTargetedUserFilter = exports.NestedEnumTargetedUserFilter = NestedEnumTargetedUserFilter_1 = class NestedEnumTargetedUserFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTargetedUserFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTargetedUserFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetedUser_1.TargetedUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTargetedUserFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTargetedUserFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTargetedUserFilter)
], NestedEnumTargetedUserFilter.prototype, "not", void 0);
exports.NestedEnumTargetedUserFilter = NestedEnumTargetedUserFilter = NestedEnumTargetedUserFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTargetedUserFilter", {})
], NestedEnumTargetedUserFilter);
