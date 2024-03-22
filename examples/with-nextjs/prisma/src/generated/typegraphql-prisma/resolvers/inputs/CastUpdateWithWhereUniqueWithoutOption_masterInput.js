"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateWithWhereUniqueWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutOption_masterInput_1 = require("../inputs/CastUncheckedUpdateWithoutOption_masterInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateWithWhereUniqueWithoutOption_masterInput = exports.CastUpdateWithWhereUniqueWithoutOption_masterInput = class CastUpdateWithWhereUniqueWithoutOption_masterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateWithWhereUniqueWithoutOption_masterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutOption_masterInput_1.CastUncheckedUpdateWithoutOption_masterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutOption_masterInput_1.CastUncheckedUpdateWithoutOption_masterInput)
], CastUpdateWithWhereUniqueWithoutOption_masterInput.prototype, "data", void 0);
exports.CastUpdateWithWhereUniqueWithoutOption_masterInput = CastUpdateWithWhereUniqueWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateWithWhereUniqueWithoutOption_masterInput", {})
], CastUpdateWithWhereUniqueWithoutOption_masterInput);
