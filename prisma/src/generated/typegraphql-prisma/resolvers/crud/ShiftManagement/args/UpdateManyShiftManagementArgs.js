"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedUpdateManyInput_1 = require("../../../inputs/ShiftManagementUncheckedUpdateManyInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
let UpdateManyShiftManagementArgs = class UpdateManyShiftManagementArgs {
};
exports.UpdateManyShiftManagementArgs = UpdateManyShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateManyInput_1.ShiftManagementUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateManyInput_1.ShiftManagementUncheckedUpdateManyInput)
], UpdateManyShiftManagementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], UpdateManyShiftManagementArgs.prototype, "where", void 0);
exports.UpdateManyShiftManagementArgs = UpdateManyShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShiftManagementArgs);
