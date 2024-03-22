"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedCreateInput_1 = require("../../../inputs/BankInformationUncheckedCreateInput");
let CreateOneBankInformationArgs = class CreateOneBankInformationArgs {
};
exports.CreateOneBankInformationArgs = CreateOneBankInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedCreateInput_1.BankInformationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedCreateInput_1.BankInformationUncheckedCreateInput)
], CreateOneBankInformationArgs.prototype, "data", void 0);
exports.CreateOneBankInformationArgs = CreateOneBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBankInformationArgs);
