"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereInput_1 = require("../../../inputs/BankInformationWhereInput");
let DeleteManyBankInformationArgs = exports.DeleteManyBankInformationArgs = class DeleteManyBankInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], DeleteManyBankInformationArgs.prototype, "where", void 0);
exports.DeleteManyBankInformationArgs = DeleteManyBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBankInformationArgs);
