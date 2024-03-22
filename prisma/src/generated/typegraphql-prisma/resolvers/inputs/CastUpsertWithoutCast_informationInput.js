"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutCast_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutCast_informationInput");
const CastUncheckedUpdateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutCast_informationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutCast_informationInput = class CastUpsertWithoutCast_informationInput {
};
exports.CastUpsertWithoutCast_informationInput = CastUpsertWithoutCast_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput)
], CastUpsertWithoutCast_informationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput)
], CastUpsertWithoutCast_informationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutCast_informationInput.prototype, "where", void 0);
exports.CastUpsertWithoutCast_informationInput = CastUpsertWithoutCast_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutCast_informationInput", {})
], CastUpsertWithoutCast_informationInput);
