"use strict";
var NestedEnumCupNumberNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCupNumberNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CupNumber_1 = require("../../enums/CupNumber");
let NestedEnumCupNumberNullableFilter = exports.NestedEnumCupNumberNullableFilter = NestedEnumCupNumberNullableFilter_1 = class NestedEnumCupNumberNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCupNumberNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCupNumberNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CupNumber_1.CupNumber], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCupNumberNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCupNumberNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCupNumberNullableFilter)
], NestedEnumCupNumberNullableFilter.prototype, "not", void 0);
exports.NestedEnumCupNumberNullableFilter = NestedEnumCupNumberNullableFilter = NestedEnumCupNumberNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCupNumberNullableFilter", {})
], NestedEnumCupNumberNullableFilter);
