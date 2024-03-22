"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutShift_managementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedCreateWithoutShift_managementInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutShift_managementInput = class CastCreateOrConnectWithoutShift_managementInput {
};
exports.CastCreateOrConnectWithoutShift_managementInput = CastCreateOrConnectWithoutShift_managementInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutShift_managementInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput)
], CastCreateOrConnectWithoutShift_managementInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutShift_managementInput = CastCreateOrConnectWithoutShift_managementInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutShift_managementInput", {})
], CastCreateOrConnectWithoutShift_managementInput);
