"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedCreateWithoutCastInput");
const ShiftManagementUncheckedUpdateWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedUpdateWithoutCastInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUpsertWithWhereUniqueWithoutCastInput = class ShiftManagementUpsertWithWhereUniqueWithoutCastInput {
};
exports.ShiftManagementUpsertWithWhereUniqueWithoutCastInput = ShiftManagementUpsertWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateWithoutCastInput_1.ShiftManagementUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateWithoutCastInput_1.ShiftManagementUncheckedUpdateWithoutCastInput)
], ShiftManagementUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateWithoutCastInput_1.ShiftManagementUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateWithoutCastInput_1.ShiftManagementUncheckedCreateWithoutCastInput)
], ShiftManagementUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.ShiftManagementUpsertWithWhereUniqueWithoutCastInput = ShiftManagementUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpsertWithWhereUniqueWithoutCastInput", {})
], ShiftManagementUpsertWithWhereUniqueWithoutCastInput);
