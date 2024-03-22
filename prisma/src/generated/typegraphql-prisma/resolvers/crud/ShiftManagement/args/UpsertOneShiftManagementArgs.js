"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateInput_1 = require("../../../inputs/ShiftManagementUncheckedCreateInput");
const ShiftManagementUncheckedUpdateInput_1 = require("../../../inputs/ShiftManagementUncheckedUpdateInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
let UpsertOneShiftManagementArgs = class UpsertOneShiftManagementArgs {
};
exports.UpsertOneShiftManagementArgs = UpsertOneShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], UpsertOneShiftManagementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateInput_1.ShiftManagementUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateInput_1.ShiftManagementUncheckedCreateInput)
], UpsertOneShiftManagementArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateInput_1.ShiftManagementUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateInput_1.ShiftManagementUncheckedUpdateInput)
], UpsertOneShiftManagementArgs.prototype, "update", void 0);
exports.UpsertOneShiftManagementArgs = UpsertOneShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneShiftManagementArgs);
