"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BankInformationCreateWithoutCastInput = exports.BankInformationCreateWithoutCastInput = class BankInformationCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateWithoutCastInput.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankInformationCreateWithoutCastInput.prototype, "is_deleted", void 0);
exports.BankInformationCreateWithoutCastInput = BankInformationCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationCreateWithoutCastInput", {})
], BankInformationCreateWithoutCastInput);
