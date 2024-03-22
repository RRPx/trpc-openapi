"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountBank_informationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereInput_1 = require("../../inputs/BankInformationWhereInput");
let CastCountBank_informationArgs = exports.CastCountBank_informationArgs = class CastCountBank_informationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], CastCountBank_informationArgs.prototype, "where", void 0);
exports.CastCountBank_informationArgs = CastCountBank_informationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountBank_informationArgs);
