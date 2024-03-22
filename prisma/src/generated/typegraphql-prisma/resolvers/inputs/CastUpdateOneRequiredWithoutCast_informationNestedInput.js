"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneRequiredWithoutCast_informationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutCast_informationInput_1 = require("../inputs/CastCreateOrConnectWithoutCast_informationInput");
const CastUncheckedCreateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutCast_informationInput");
const CastUncheckedUpdateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutCast_informationInput");
const CastUpsertWithoutCast_informationInput_1 = require("../inputs/CastUpsertWithoutCast_informationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneRequiredWithoutCast_informationNestedInput = class CastUpdateOneRequiredWithoutCast_informationNestedInput {
};
exports.CastUpdateOneRequiredWithoutCast_informationNestedInput = CastUpdateOneRequiredWithoutCast_informationNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput)
], CastUpdateOneRequiredWithoutCast_informationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutCast_informationInput_1.CastCreateOrConnectWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutCast_informationInput_1.CastCreateOrConnectWithoutCast_informationInput)
], CastUpdateOneRequiredWithoutCast_informationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutCast_informationInput_1.CastUpsertWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutCast_informationInput_1.CastUpsertWithoutCast_informationInput)
], CastUpdateOneRequiredWithoutCast_informationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneRequiredWithoutCast_informationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput)
], CastUpdateOneRequiredWithoutCast_informationNestedInput.prototype, "update", void 0);
exports.CastUpdateOneRequiredWithoutCast_informationNestedInput = CastUpdateOneRequiredWithoutCast_informationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneRequiredWithoutCast_informationNestedInput", {})
], CastUpdateOneRequiredWithoutCast_informationNestedInput);
