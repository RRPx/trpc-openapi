"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereUniqueInput_1 = require("../../../inputs/BankInformationWhereUniqueInput");
let FindUniqueBankInformationArgs = class FindUniqueBankInformationArgs {
};
exports.FindUniqueBankInformationArgs = FindUniqueBankInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], FindUniqueBankInformationArgs.prototype, "where", void 0);
exports.FindUniqueBankInformationArgs = FindUniqueBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBankInformationArgs);
