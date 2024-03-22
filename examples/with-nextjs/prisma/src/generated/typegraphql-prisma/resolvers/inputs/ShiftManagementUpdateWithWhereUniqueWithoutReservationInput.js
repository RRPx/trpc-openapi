"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateWithWhereUniqueWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedUpdateWithoutReservationInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUpdateWithWhereUniqueWithoutReservationInput = exports.ShiftManagementUpdateWithWhereUniqueWithoutReservationInput = class ShiftManagementUpdateWithWhereUniqueWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementUpdateWithWhereUniqueWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateWithoutReservationInput_1.ShiftManagementUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateWithoutReservationInput_1.ShiftManagementUncheckedUpdateWithoutReservationInput)
], ShiftManagementUpdateWithWhereUniqueWithoutReservationInput.prototype, "data", void 0);
exports.ShiftManagementUpdateWithWhereUniqueWithoutReservationInput = ShiftManagementUpdateWithWhereUniqueWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateWithWhereUniqueWithoutReservationInput", {})
], ShiftManagementUpdateWithWhereUniqueWithoutReservationInput);
