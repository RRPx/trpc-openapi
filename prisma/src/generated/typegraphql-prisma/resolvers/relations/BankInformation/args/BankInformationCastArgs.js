"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereInput_1 = require("../../../inputs/CastWhereInput");
let BankInformationCastArgs = class BankInformationCastArgs {
};
exports.BankInformationCastArgs = BankInformationCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], BankInformationCastArgs.prototype, "where", void 0);
exports.BankInformationCastArgs = BankInformationCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], BankInformationCastArgs);
