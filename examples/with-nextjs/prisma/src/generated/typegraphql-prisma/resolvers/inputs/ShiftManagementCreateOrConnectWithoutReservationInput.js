"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateWithoutReservationInput_1 = require("../inputs/ShiftManagementUncheckedCreateWithoutReservationInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementCreateOrConnectWithoutReservationInput = exports.ShiftManagementCreateOrConnectWithoutReservationInput = class ShiftManagementCreateOrConnectWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateWithoutReservationInput_1.ShiftManagementUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateWithoutReservationInput_1.ShiftManagementUncheckedCreateWithoutReservationInput)
], ShiftManagementCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.ShiftManagementCreateOrConnectWithoutReservationInput = ShiftManagementCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateOrConnectWithoutReservationInput", {})
], ShiftManagementCreateOrConnectWithoutReservationInput);
