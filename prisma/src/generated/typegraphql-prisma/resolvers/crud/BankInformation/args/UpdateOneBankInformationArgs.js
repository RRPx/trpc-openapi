"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedUpdateInput_1 = require("../../../inputs/BankInformationUncheckedUpdateInput");
const BankInformationWhereUniqueInput_1 = require("../../../inputs/BankInformationWhereUniqueInput");
let UpdateOneBankInformationArgs = class UpdateOneBankInformationArgs {
};
exports.UpdateOneBankInformationArgs = UpdateOneBankInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateInput_1.BankInformationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateInput_1.BankInformationUncheckedUpdateInput)
], UpdateOneBankInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], UpdateOneBankInformationArgs.prototype, "where", void 0);
exports.UpdateOneBankInformationArgs = UpdateOneBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBankInformationArgs);
