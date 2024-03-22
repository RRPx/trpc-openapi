"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementOrderByWithAggregationInput_1 = require("../../../inputs/ShiftManagementOrderByWithAggregationInput");
const ShiftManagementScalarWhereWithAggregatesInput_1 = require("../../../inputs/ShiftManagementScalarWhereWithAggregatesInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
const ShiftManagementScalarFieldEnum_1 = require("../../../../enums/ShiftManagementScalarFieldEnum");
let GroupByShiftManagementArgs = exports.GroupByShiftManagementArgs = class GroupByShiftManagementArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], GroupByShiftManagementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementOrderByWithAggregationInput_1.ShiftManagementOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShiftManagementArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarFieldEnum_1.ShiftManagementScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShiftManagementArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementScalarWhereWithAggregatesInput_1.ShiftManagementScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementScalarWhereWithAggregatesInput_1.ShiftManagementScalarWhereWithAggregatesInput)
], GroupByShiftManagementArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShiftManagementArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShiftManagementArgs.prototype, "skip", void 0);
exports.GroupByShiftManagementArgs = GroupByShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShiftManagementArgs);
