"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutShift_managementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutShift_managementInput_1 = require("../inputs/CastCreateOrConnectWithoutShift_managementInput");
const CastUncheckedCreateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedCreateWithoutShift_managementInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutShift_managementInput = exports.CastCreateNestedOneWithoutShift_managementInput = class CastCreateNestedOneWithoutShift_managementInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput)
], CastCreateNestedOneWithoutShift_managementInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutShift_managementInput_1.CastCreateOrConnectWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutShift_managementInput_1.CastCreateOrConnectWithoutShift_managementInput)
], CastCreateNestedOneWithoutShift_managementInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutShift_managementInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutShift_managementInput = CastCreateNestedOneWithoutShift_managementInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutShift_managementInput", {})
], CastCreateNestedOneWithoutShift_managementInput);
