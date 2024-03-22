"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedUpdateManyInput_1 = require("../../../inputs/BankInformationUncheckedUpdateManyInput");
const BankInformationWhereInput_1 = require("../../../inputs/BankInformationWhereInput");
let UpdateManyBankInformationArgs = exports.UpdateManyBankInformationArgs = class UpdateManyBankInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateManyInput_1.BankInformationUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateManyInput_1.BankInformationUncheckedUpdateManyInput)
], UpdateManyBankInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], UpdateManyBankInformationArgs.prototype, "where", void 0);
exports.UpdateManyBankInformationArgs = UpdateManyBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBankInformationArgs);
