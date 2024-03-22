"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateInput_1 = require("../../../inputs/ShiftManagementUncheckedCreateInput");
let CreateOneShiftManagementArgs = exports.CreateOneShiftManagementArgs = class CreateOneShiftManagementArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateInput_1.ShiftManagementUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateInput_1.ShiftManagementUncheckedCreateInput)
], CreateOneShiftManagementArgs.prototype, "data", void 0);
exports.CreateOneShiftManagementArgs = CreateOneShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneShiftManagementArgs);
