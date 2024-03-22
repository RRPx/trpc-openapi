"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
let DeleteManyShiftManagementArgs = exports.DeleteManyShiftManagementArgs = class DeleteManyShiftManagementArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], DeleteManyShiftManagementArgs.prototype, "where", void 0);
exports.DeleteManyShiftManagementArgs = DeleteManyShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShiftManagementArgs);
