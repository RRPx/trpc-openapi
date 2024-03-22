"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShiftManagementOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementOrderByWithRelationInput_1 = require("../../../inputs/ShiftManagementOrderByWithRelationInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
const ShiftManagementScalarFieldEnum_1 = require("../../../../enums/ShiftManagementScalarFieldEnum");
let FindFirstShiftManagementOrThrowArgs = class FindFirstShiftManagementOrThrowArgs {
};
exports.FindFirstShiftManagementOrThrowArgs = FindFirstShiftManagementOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], FindFirstShiftManagementOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementOrderByWithRelationInput_1.ShiftManagementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShiftManagementOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], FindFirstShiftManagementOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShiftManagementOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShiftManagementOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarFieldEnum_1.ShiftManagementScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShiftManagementOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstShiftManagementOrThrowArgs = FindFirstShiftManagementOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstShiftManagementOrThrowArgs);
