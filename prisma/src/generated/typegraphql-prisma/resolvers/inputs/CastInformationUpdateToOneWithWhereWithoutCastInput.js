"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationUpdateToOneWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedUpdateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedUpdateWithoutCastInput");
const CastInformationWhereInput_1 = require("../inputs/CastInformationWhereInput");
let CastInformationUpdateToOneWithWhereWithoutCastInput = class CastInformationUpdateToOneWithWhereWithoutCastInput {
};
exports.CastInformationUpdateToOneWithWhereWithoutCastInput = CastInformationUpdateToOneWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationUpdateToOneWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput)
], CastInformationUpdateToOneWithWhereWithoutCastInput.prototype, "data", void 0);
exports.CastInformationUpdateToOneWithWhereWithoutCastInput = CastInformationUpdateToOneWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationUpdateToOneWithWhereWithoutCastInput", {})
], CastInformationUpdateToOneWithWhereWithoutCastInput);
