"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedUpdateWithoutCastInput_1 = require("../inputs/BankInformationUncheckedUpdateWithoutCastInput");
const BankInformationWhereUniqueInput_1 = require("../inputs/BankInformationWhereUniqueInput");
let BankInformationUpdateWithWhereUniqueWithoutCastInput = exports.BankInformationUpdateWithWhereUniqueWithoutCastInput = class BankInformationUpdateWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], BankInformationUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateWithoutCastInput_1.BankInformationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateWithoutCastInput_1.BankInformationUncheckedUpdateWithoutCastInput)
], BankInformationUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.BankInformationUpdateWithWhereUniqueWithoutCastInput = BankInformationUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationUpdateWithWhereUniqueWithoutCastInput", {})
], BankInformationUpdateWithWhereUniqueWithoutCastInput);
