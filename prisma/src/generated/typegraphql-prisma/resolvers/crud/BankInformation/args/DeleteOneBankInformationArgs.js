"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereUniqueInput_1 = require("../../../inputs/BankInformationWhereUniqueInput");
let DeleteOneBankInformationArgs = class DeleteOneBankInformationArgs {
};
exports.DeleteOneBankInformationArgs = DeleteOneBankInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], DeleteOneBankInformationArgs.prototype, "where", void 0);
exports.DeleteOneBankInformationArgs = DeleteOneBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBankInformationArgs);
