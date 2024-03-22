"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationUpsertWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedCreateWithoutCastInput");
const CastInformationUncheckedUpdateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedUpdateWithoutCastInput");
const CastInformationWhereInput_1 = require("../inputs/CastInformationWhereInput");
let CastInformationUpsertWithoutCastInput = exports.CastInformationUpsertWithoutCastInput = class CastInformationUpsertWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput)
], CastInformationUpsertWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput)
], CastInformationUpsertWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationUpsertWithoutCastInput.prototype, "where", void 0);
exports.CastInformationUpsertWithoutCastInput = CastInformationUpsertWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationUpsertWithoutCastInput", {})
], CastInformationUpsertWithoutCastInput);
