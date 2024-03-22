"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyReservationInputEnvelope_1 = require("../inputs/ShiftManagementCreateManyReservationInputEnvelope");
const ShiftManagementCreateOrConnectWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateOrConnectWithoutReservationInput");
const ShiftManagementCreateWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateWithoutReservationInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUncheckedCreateNestedManyWithoutReservationInput = class ShiftManagementUncheckedCreateNestedManyWithoutReservationInput {
};
exports.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput = ShiftManagementUncheckedCreateNestedManyWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateWithoutReservationInput_1.ShiftManagementCreateWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateOrConnectWithoutReservationInput_1.ShiftManagementCreateOrConnectWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateManyReservationInputEnvelope_1.ShiftManagementCreateManyReservationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateManyReservationInputEnvelope_1.ShiftManagementCreateManyReservationInputEnvelope)
], ShiftManagementUncheckedCreateNestedManyWithoutReservationInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutReservationInput.prototype, "connect", void 0);
exports.ShiftManagementUncheckedCreateNestedManyWithoutReservationInput = ShiftManagementUncheckedCreateNestedManyWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUncheckedCreateNestedManyWithoutReservationInput", {})
], ShiftManagementUncheckedCreateNestedManyWithoutReservationInput);
