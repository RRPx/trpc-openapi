"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedCreateInput_1 = require("../../../inputs/BankInformationUncheckedCreateInput");
const BankInformationUncheckedUpdateInput_1 = require("../../../inputs/BankInformationUncheckedUpdateInput");
const BankInformationWhereUniqueInput_1 = require("../../../inputs/BankInformationWhereUniqueInput");
let UpsertOneBankInformationArgs = exports.UpsertOneBankInformationArgs = class UpsertOneBankInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], UpsertOneBankInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedCreateInput_1.BankInformationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedCreateInput_1.BankInformationUncheckedCreateInput)
], UpsertOneBankInformationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateInput_1.BankInformationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateInput_1.BankInformationUncheckedUpdateInput)
], UpsertOneBankInformationArgs.prototype, "update", void 0);
exports.UpsertOneBankInformationArgs = UpsertOneBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBankInformationArgs);
