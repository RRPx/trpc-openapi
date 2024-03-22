"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutShift_managementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedUpdateWithoutShift_managementInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutShift_managementInput = exports.CastUpdateToOneWithWhereWithoutShift_managementInput = class CastUpdateToOneWithWhereWithoutShift_managementInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutShift_managementInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput)
], CastUpdateToOneWithWhereWithoutShift_managementInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutShift_managementInput = CastUpdateToOneWithWhereWithoutShift_managementInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutShift_managementInput", {})
], CastUpdateToOneWithWhereWithoutShift_managementInput);
