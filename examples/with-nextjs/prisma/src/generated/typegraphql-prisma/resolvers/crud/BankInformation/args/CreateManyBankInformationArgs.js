"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBankInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateManyInput_1 = require("../../../inputs/BankInformationCreateManyInput");
let CreateManyBankInformationArgs = exports.CreateManyBankInformationArgs = class CreateManyBankInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateManyInput_1.BankInformationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBankInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBankInformationArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyBankInformationArgs = CreateManyBankInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBankInformationArgs);
