"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUncheckedUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyCastInputEnvelope_1 = require("../inputs/ShiftManagementCreateManyCastInputEnvelope");
const ShiftManagementCreateOrConnectWithoutCastInput_1 = require("../inputs/ShiftManagementCreateOrConnectWithoutCastInput");
const ShiftManagementCreateWithoutCastInput_1 = require("../inputs/ShiftManagementCreateWithoutCastInput");
const ShiftManagementScalarWhereInput_1 = require("../inputs/ShiftManagementScalarWhereInput");
const ShiftManagementUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/ShiftManagementUpdateManyWithWhereWithoutCastInput");
const ShiftManagementUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/ShiftManagementUpdateWithWhereUniqueWithoutCastInput");
const ShiftManagementUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/ShiftManagementUpsertWithWhereUniqueWithoutCastInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUncheckedUpdateManyWithoutCastNestedInput = exports.ShiftManagementUncheckedUpdateManyWithoutCastNestedInput = class ShiftManagementUncheckedUpdateManyWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateWithoutCastInput_1.ShiftManagementCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateOrConnectWithoutCastInput_1.ShiftManagementCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpsertWithWhereUniqueWithoutCastInput_1.ShiftManagementUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateManyCastInputEnvelope_1.ShiftManagementCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateManyCastInputEnvelope_1.ShiftManagementCreateManyCastInputEnvelope)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpdateWithWhereUniqueWithoutCastInput_1.ShiftManagementUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementUpdateManyWithWhereWithoutCastInput_1.ShiftManagementUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarWhereInput_1.ShiftManagementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.ShiftManagementUncheckedUpdateManyWithoutCastNestedInput = ShiftManagementUncheckedUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUncheckedUpdateManyWithoutCastNestedInput", {})
], ShiftManagementUncheckedUpdateManyWithoutCastNestedInput);
