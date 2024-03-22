"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithWhereUniqueWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutOption_masterInput_1 = require("../inputs/CastUncheckedCreateWithoutOption_masterInput");
const CastUncheckedUpdateWithoutOption_masterInput_1 = require("../inputs/CastUncheckedUpdateWithoutOption_masterInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpsertWithWhereUniqueWithoutOption_masterInput = exports.CastUpsertWithWhereUniqueWithoutOption_masterInput = class CastUpsertWithWhereUniqueWithoutOption_masterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpsertWithWhereUniqueWithoutOption_masterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutOption_masterInput_1.CastUncheckedUpdateWithoutOption_masterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutOption_masterInput_1.CastUncheckedUpdateWithoutOption_masterInput)
], CastUpsertWithWhereUniqueWithoutOption_masterInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutOption_masterInput_1.CastUncheckedCreateWithoutOption_masterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutOption_masterInput_1.CastUncheckedCreateWithoutOption_masterInput)
], CastUpsertWithWhereUniqueWithoutOption_masterInput.prototype, "create", void 0);
exports.CastUpsertWithWhereUniqueWithoutOption_masterInput = CastUpsertWithWhereUniqueWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithWhereUniqueWithoutOption_masterInput", {})
], CastUpsertWithWhereUniqueWithoutOption_masterInput);
