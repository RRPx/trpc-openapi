"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/BankInformationUncheckedCreateWithoutCastInput");
const BankInformationWhereUniqueInput_1 = require("../inputs/BankInformationWhereUniqueInput");
let BankInformationCreateOrConnectWithoutCastInput = exports.BankInformationCreateOrConnectWithoutCastInput = class BankInformationCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], BankInformationCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedCreateWithoutCastInput_1.BankInformationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedCreateWithoutCastInput_1.BankInformationUncheckedCreateWithoutCastInput)
], BankInformationCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.BankInformationCreateOrConnectWithoutCastInput = BankInformationCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationCreateOrConnectWithoutCastInput", {})
], BankInformationCreateOrConnectWithoutCastInput);
