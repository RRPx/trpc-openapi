"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementUncheckedCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyCastInputEnvelope_1 = require("../inputs/ShiftManagementCreateManyCastInputEnvelope");
const ShiftManagementCreateOrConnectWithoutCastInput_1 = require("../inputs/ShiftManagementCreateOrConnectWithoutCastInput");
const ShiftManagementCreateWithoutCastInput_1 = require("../inputs/ShiftManagementCreateWithoutCastInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementUncheckedCreateNestedManyWithoutCastInput = exports.ShiftManagementUncheckedCreateNestedManyWithoutCastInput = class ShiftManagementUncheckedCreateNestedManyWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateWithoutCastInput_1.ShiftManagementCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateOrConnectWithoutCastInput_1.ShiftManagementCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateManyCastInputEnvelope_1.ShiftManagementCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateManyCastInputEnvelope_1.ShiftManagementCreateManyCastInputEnvelope)
], ShiftManagementUncheckedCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementUncheckedCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.ShiftManagementUncheckedCreateNestedManyWithoutCastInput = ShiftManagementUncheckedCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementUncheckedCreateNestedManyWithoutCastInput", {})
], ShiftManagementUncheckedCreateNestedManyWithoutCastInput);
