"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBankInformation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCountAggregate_1 = require("../outputs/BankInformationCountAggregate");
const BankInformationMaxAggregate_1 = require("../outputs/BankInformationMaxAggregate");
const BankInformationMinAggregate_1 = require("../outputs/BankInformationMinAggregate");
let AggregateBankInformation = exports.AggregateBankInformation = class AggregateBankInformation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCountAggregate_1.BankInformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCountAggregate_1.BankInformationCountAggregate)
], AggregateBankInformation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMinAggregate_1.BankInformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMinAggregate_1.BankInformationMinAggregate)
], AggregateBankInformation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMaxAggregate_1.BankInformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMaxAggregate_1.BankInformationMaxAggregate)
], AggregateBankInformation.prototype, "_max", void 0);
exports.AggregateBankInformation = AggregateBankInformation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBankInformation", {})
], AggregateBankInformation);
