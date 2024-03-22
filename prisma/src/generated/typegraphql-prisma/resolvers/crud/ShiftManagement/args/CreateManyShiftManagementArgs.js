"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShiftManagementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyInput_1 = require("../../../inputs/ShiftManagementCreateManyInput");
let CreateManyShiftManagementArgs = class CreateManyShiftManagementArgs {
};
exports.CreateManyShiftManagementArgs = CreateManyShiftManagementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateManyInput_1.ShiftManagementCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShiftManagementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyShiftManagementArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyShiftManagementArgs = CreateManyShiftManagementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShiftManagementArgs);
