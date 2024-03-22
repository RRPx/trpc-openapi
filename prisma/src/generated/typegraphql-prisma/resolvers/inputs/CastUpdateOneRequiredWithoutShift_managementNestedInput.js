"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneRequiredWithoutShift_managementNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutShift_managementInput_1 = require("../inputs/CastCreateOrConnectWithoutShift_managementInput");
const CastUncheckedCreateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedCreateWithoutShift_managementInput");
const CastUncheckedUpdateWithoutShift_managementInput_1 = require("../inputs/CastUncheckedUpdateWithoutShift_managementInput");
const CastUpsertWithoutShift_managementInput_1 = require("../inputs/CastUpsertWithoutShift_managementInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneRequiredWithoutShift_managementNestedInput = class CastUpdateOneRequiredWithoutShift_managementNestedInput {
};
exports.CastUpdateOneRequiredWithoutShift_managementNestedInput = CastUpdateOneRequiredWithoutShift_managementNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutShift_managementInput_1.CastUncheckedCreateWithoutShift_managementInput)
], CastUpdateOneRequiredWithoutShift_managementNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutShift_managementInput_1.CastCreateOrConnectWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutShift_managementInput_1.CastCreateOrConnectWithoutShift_managementInput)
], CastUpdateOneRequiredWithoutShift_managementNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutShift_managementInput_1.CastUpsertWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutShift_managementInput_1.CastUpsertWithoutShift_managementInput)
], CastUpdateOneRequiredWithoutShift_managementNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneRequiredWithoutShift_managementNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutShift_managementInput_1.CastUncheckedUpdateWithoutShift_managementInput)
], CastUpdateOneRequiredWithoutShift_managementNestedInput.prototype, "update", void 0);
exports.CastUpdateOneRequiredWithoutShift_managementNestedInput = CastUpdateOneRequiredWithoutShift_managementNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneRequiredWithoutShift_managementNestedInput", {})
], CastUpdateOneRequiredWithoutShift_managementNestedInput);
