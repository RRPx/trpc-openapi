"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/BankInformationUncheckedCreateWithoutCastInput");
const BankInformationUncheckedUpdateWithoutCastInput_1 = require("../inputs/BankInformationUncheckedUpdateWithoutCastInput");
const BankInformationWhereUniqueInput_1 = require("../inputs/BankInformationWhereUniqueInput");
let BankInformationUpsertWithWhereUniqueWithoutCastInput = class BankInformationUpsertWithWhereUniqueWithoutCastInput {
};
exports.BankInformationUpsertWithWhereUniqueWithoutCastInput = BankInformationUpsertWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], BankInformationUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateWithoutCastInput_1.BankInformationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateWithoutCastInput_1.BankInformationUncheckedUpdateWithoutCastInput)
], BankInformationUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedCreateWithoutCastInput_1.BankInformationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedCreateWithoutCastInput_1.BankInformationUncheckedCreateWithoutCastInput)
], BankInformationUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.BankInformationUpsertWithWhereUniqueWithoutCastInput = BankInformationUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationUpsertWithWhereUniqueWithoutCastInput", {})
], BankInformationUpsertWithWhereUniqueWithoutCastInput);
