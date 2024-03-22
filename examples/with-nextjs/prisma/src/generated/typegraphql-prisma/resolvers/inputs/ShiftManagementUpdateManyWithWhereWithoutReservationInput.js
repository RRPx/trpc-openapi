"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateManyWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementScalarWhereInput_1 = require("../inputs/ShiftManagementScalarWhereInput");
const ShiftManagementUncheckedUpdateManyWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedUpdateManyWithoutReservationInput");
let ShiftManagementUpdateManyWithWhereWithoutReservationInput = exports.ShiftManagementUpdateManyWithWhereWithoutReservationInput = class ShiftManagementUpdateManyWithWhereWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput)
], ShiftManagementUpdateManyWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateManyWithoutReservationInput_1.ShiftManagementUncheckedUpdateManyWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateManyWithoutReservationInput_1.ShiftManagementUncheckedUpdateManyWithoutReservationInput)
], ShiftManagementUpdateManyWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.ShiftManagementUpdateManyWithWhereWithoutReservationInput = ShiftManagementUpdateManyWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateManyWithWhereWithoutReservationInput", {})
], ShiftManagementUpdateManyWithWhereWithoutReservationInput);
