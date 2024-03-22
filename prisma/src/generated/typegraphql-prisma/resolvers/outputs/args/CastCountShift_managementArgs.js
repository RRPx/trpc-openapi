"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountShift_managementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereInput_1 = require("../../inputs/ShiftManagementWhereInput");
let CastCountShift_managementArgs = class CastCountShift_managementArgs {
};
exports.CastCountShift_managementArgs = CastCountShift_managementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], CastCountShift_managementArgs.prototype, "where", void 0);
exports.CastCountShift_managementArgs = CastCountShift_managementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountShift_managementArgs);
