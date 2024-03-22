"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShiftManagementOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
let FindUniqueShiftManagementOrThrowArgs = exports.FindUniqueShiftManagementOrThrowArgs = class FindUniqueShiftManagementOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], FindUniqueShiftManagementOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueShiftManagementOrThrowArgs = FindUniqueShiftManagementOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShiftManagementOrThrowArgs);
