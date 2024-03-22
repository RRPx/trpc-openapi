"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutShift_managementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedCreateWithoutShift_managementInput");
const CastUncheckedUpdateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedUpdateWithoutShift_managementInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutShift_managementInput = class CastUpsertWithoutShift_managementInput {
};
exports.CastUpsertWithoutShift_managementInput = CastUpsertWithoutShift_managementInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput)
], CastUpsertWithoutShift_managementInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput)
], CastUpsertWithoutShift_managementInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutShift_managementInput.prototype, "where", void 0);
exports.CastUpsertWithoutShift_managementInput = CastUpsertWithoutShift_managementInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutShift_managementInput", {})
], CastUpsertWithoutShift_managementInput);
