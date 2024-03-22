"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUpdateManyWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyReservationInputEnvelope_1 = require("../inputs/ShiftManagementCreateManyReservationInputEnvelope");
const ShiftManagementCreateOrConnectWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateOrConnectWithoutReservationInput");
const ShiftManagementCreateWithoutReservationInput_1 = require("../inputs/ShiftManagementCreateWithoutReservationInput");
const ShiftManagementScalarWhereInput_1 = require("../inputs/ShiftManagementScalarWhereInput");
const ShiftManagementUpdateManyWithWhereWithoutReservationInput_1 = require("../inputs/ShiftManagementUpdateManyWithWhereWithoutReservationInput");
const ShiftManagementUpdateWithWhereUniqueWithoutReservationInput_1 = require("../inputs/ShiftManagementUpdateWithWhereUniqueWithoutReservationInput");
const ShiftManagementUpsertWithWhereUniqueWithoutReservationInput_1 = require("../inputs/ShiftManagementUpsertWithWhereUniqueWithoutReservationInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUpdateManyWithoutReservationNestedInput = exports.ShiftManagementUpdateManyWithoutReservationNestedInput = class ShiftManagementUpdateManyWithoutReservationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateWithoutReservationInput_1.ShiftManagementCreateWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateOrConnectWithoutReservationInput_1.ShiftManagementCreateOrConnectWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpsertWithWhereUniqueWithoutReservationInput_1.ShiftManagementUpsertWithWhereUniqueWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateManyReservationInputEnvelope_1.ShiftManagementCreateManyReservationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateManyReservationInputEnvelope_1.ShiftManagementCreateManyReservationInputEnvelope)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpdateWithWhereUniqueWithoutReservationInput_1.ShiftManagementUpdateWithWhereUniqueWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpdateManyWithWhereWithoutReservationInput_1.ShiftManagementUpdateManyWithWhereWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUpdateManyWithoutReservationNestedInput.prototype, "deleteMany", void 0);
exports.ShiftManagementUpdateManyWithoutReservationNestedInput = ShiftManagementUpdateManyWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUpdateManyWithoutReservationNestedInput", {})
], ShiftManagementUpdateManyWithoutReservationNestedInput);
