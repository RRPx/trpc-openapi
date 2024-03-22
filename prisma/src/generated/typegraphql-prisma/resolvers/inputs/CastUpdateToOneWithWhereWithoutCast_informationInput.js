"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutCast_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutCast_informationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutCast_informationInput = class CastUpdateToOneWithWhereWithoutCast_informationInput {
};
exports.CastUpdateToOneWithWhereWithoutCast_informationInput = CastUpdateToOneWithWhereWithoutCast_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutCast_informationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutCast_informationInput_1.CastUncheckedUpdateWithoutCast_informationInput)
], CastUpdateToOneWithWhereWithoutCast_informationInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutCast_informationInput = CastUpdateToOneWithWhereWithoutCast_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutCast_informationInput", {})
], CastUpdateToOneWithWhereWithoutCast_informationInput);
