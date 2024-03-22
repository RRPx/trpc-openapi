"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedUpdateWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedUpdateWithoutCastInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUpdateWithWhereUniqueWithoutCastInput = exports.ShiftManagementUpdateWithWhereUniqueWithoutCastInput = class ShiftManagementUpdateWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateWithoutCastInput_1.ShiftManagementUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateWithoutCastInput_1.ShiftManagementUncheckedUpdateWithoutCastInput)
], ShiftManagementUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.ShiftManagementUpdateWithWhereUniqueWithoutCastInput = ShiftManagementUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateWithWhereUniqueWithoutCastInput", {})
], ShiftManagementUpdateWithWhereUniqueWithoutCastInput);
