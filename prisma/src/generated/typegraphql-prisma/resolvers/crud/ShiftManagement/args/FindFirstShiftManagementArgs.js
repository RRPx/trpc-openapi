"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementOrderByWithRelationInput_1 = require("../../../inputs/ShiftManagementOrderByWithRelationInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
const ShiftManagementScalarFieldEnum_1 = require("../../../../enums/ShiftManagementScalarFieldEnum");
let FindFirstShiftManagementArgs = class FindFirstShiftManagementArgs {
};
exports.FindFirstShiftManagementArgs = FindFirstShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], FindFirstShiftManagementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementOrderByWithRelationInput_1.ShiftManagementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShiftManagementArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], FindFirstShiftManagementArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShiftManagementArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShiftManagementArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarFieldEnum_1.ShiftManagementScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShiftManagementArgs.prototype, "distinct", void 0);
exports.FindFirstShiftManagementArgs = FindFirstShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstShiftManagementArgs);
