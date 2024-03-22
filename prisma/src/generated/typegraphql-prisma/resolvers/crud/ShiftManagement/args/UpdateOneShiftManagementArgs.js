"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedUpdateInput_1 = require("../../../inputs/ShiftManagementUncheckedUpdateInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
let UpdateOneShiftManagementArgs = class UpdateOneShiftManagementArgs {
};
exports.UpdateOneShiftManagementArgs = UpdateOneShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateInput_1.ShiftManagementUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateInput_1.ShiftManagementUncheckedUpdateInput)
], UpdateOneShiftManagementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], UpdateOneShiftManagementArgs.prototype, "where", void 0);
exports.UpdateOneShiftManagementArgs = UpdateOneShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneShiftManagementArgs);
