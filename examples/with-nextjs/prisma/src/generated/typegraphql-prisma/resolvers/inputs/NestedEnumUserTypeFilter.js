"use strict";
var NestedEnumUserTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let NestedEnumUserTypeFilter = exports.NestedEnumUserTypeFilter = NestedEnumUserTypeFilter_1 = class NestedEnumUserTypeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeFilter)
], NestedEnumUserTypeFilter.prototype, "not", void 0);
exports.NestedEnumUserTypeFilter = NestedEnumUserTypeFilter = NestedEnumUserTypeFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserTypeFilter", {})
], NestedEnumUserTypeFilter);
