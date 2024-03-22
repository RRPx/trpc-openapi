"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastBank_informationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationOrderByWithRelationInput_1 = require("../../../inputs/BankInformationOrderByWithRelationInput");
const BankInformationWhereInput_1 = require("../../../inputs/BankInformationWhereInput");
const BankInformationWhereUniqueInput_1 = require("../../../inputs/BankInformationWhereUniqueInput");
const BankInformationScalarFieldEnum_1 = require("../../../../enums/BankInformationScalarFieldEnum");
let CastBank_informationArgs = class CastBank_informationArgs {
};
exports.CastBank_informationArgs = CastBank_informationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], CastBank_informationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationOrderByWithRelationInput_1.BankInformationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastBank_informationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput)
], CastBank_informationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastBank_informationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastBank_informationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationScalarFieldEnum_1.BankInformationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastBank_informationArgs.prototype, "distinct", void 0);
exports.CastBank_informationArgs = CastBank_informationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastBank_informationArgs);
