"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementScalarWhereInput_1 = require("../inputs/ShiftManagementScalarWhereInput");
const ShiftManagementUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedUpdateManyWithoutCastInput");
let ShiftManagementUpdateManyWithWhereWithoutCastInput = class ShiftManagementUpdateManyWithWhereWithoutCastInput {
};
exports.ShiftManagementUpdateManyWithWhereWithoutCastInput = ShiftManagementUpdateManyWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput)
], ShiftManagementUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateManyWithoutCastInput_1.ShiftManagementUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateManyWithoutCastInput_1.ShiftManagementUncheckedUpdateManyWithoutCastInput)
], ShiftManagementUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.ShiftManagementUpdateManyWithWhereWithoutCastInput = ShiftManagementUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateManyWithWhereWithoutCastInput", {})
], ShiftManagementUpdateManyWithWhereWithoutCastInput);
