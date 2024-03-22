"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCountAggregate_1 = require("../outputs/BankInformationCountAggregate");
const BankInformationMaxAggregate_1 = require("../outputs/BankInformationMaxAggregate");
const BankInformationMinAggregate_1 = require("../outputs/BankInformationMinAggregate");
let BankInformationGroupBy = class BankInformationGroupBy {
};
exports.BankInformationGroupBy = BankInformationGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankInformationGroupBy.prototype, "is_deleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCountAggregate_1.BankInformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCountAggregate_1.BankInformationCountAggregate)
], BankInformationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMinAggregate_1.BankInformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMinAggregate_1.BankInformationMinAggregate)
], BankInformationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationMaxAggregate_1.BankInformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationMaxAggregate_1.BankInformationMaxAggregate)
], BankInformationGroupBy.prototype, "_max", void 0);
exports.BankInformationGroupBy = BankInformationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BankInformationGroupBy", {})
], BankInformationGroupBy);
