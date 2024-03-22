"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
let FindUniqueShiftManagementArgs = class FindUniqueShiftManagementArgs {
};
exports.FindUniqueShiftManagementArgs = FindUniqueShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], FindUniqueShiftManagementArgs.prototype, "where", void 0);
exports.FindUniqueShiftManagementArgs = FindUniqueShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShiftManagementArgs);
