"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementUncheckedCreateWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedCreateWithoutCastInput");
const ShiftManagementWhereUniqueInput_1 = require("../inputs/ShiftManagementWhereUniqueInput");
let ShiftManagementCreateOrConnectWithoutCastInput = class ShiftManagementCreateOrConnectWithoutCastInput {
};
exports.ShiftManagementCreateOrConnectWithoutCastInput = ShiftManagementCreateOrConnectWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ShiftManagementCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateWithoutCastInput_1.ShiftManagementUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateWithoutCastInput_1.ShiftManagementUncheckedCreateWithoutCastInput)
], ShiftManagementCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.ShiftManagementCreateOrConnectWithoutCastInput = ShiftManagementCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateOrConnectWithoutCastInput", {})
], ShiftManagementCreateOrConnectWithoutCastInput);
