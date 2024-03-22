"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementOrderByWithRelationInput_1 = require("../../../inputs/ShiftManagementOrderByWithRelationInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
let AggregateShiftManagementArgs = class AggregateShiftManagementArgs {
};
exports.AggregateShiftManagementArgs = AggregateShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], AggregateShiftManagementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementOrderByWithRelationInput_1.ShiftManagementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateShiftManagementArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], AggregateShiftManagementArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShiftManagementArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShiftManagementArgs.prototype, "skip", void 0);
exports.AggregateShiftManagementArgs = AggregateShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateShiftManagementArgs);
