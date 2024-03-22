"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpsertWithWhereUniqueWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedCreateWithoutReservationInput");
const ShiftManagementUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedUpdateWithoutReservationInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUpsertWithWhereUniqueWithoutReservationInput = exports.ShiftManagementUpsertWithWhereUniqueWithoutReservationInput = class ShiftManagementUpsertWithWhereUniqueWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementUpsertWithWhereUniqueWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateWithoutReservationInput_1.ShiftManagementUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateWithoutReservationInput_1.ShiftManagementUncheckedUpdateWithoutReservationInput)
], ShiftManagementUpsertWithWhereUniqueWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateWithoutReservationInput_1.ShiftManagementUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateWithoutReservationInput_1.ShiftManagementUncheckedCreateWithoutReservationInput)
], ShiftManagementUpsertWithWhereUniqueWithoutReservationInput.prototype, "create", void 0);
exports.ShiftManagementUpsertWithWhereUniqueWithoutReservationInput = ShiftManagementUpsertWithWhereUniqueWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpsertWithWhereUniqueWithoutReservationInput", {})
], ShiftManagementUpsertWithWhereUniqueWithoutReservationInput);
