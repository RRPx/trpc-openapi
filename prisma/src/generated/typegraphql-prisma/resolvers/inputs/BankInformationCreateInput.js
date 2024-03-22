"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutBank_informationInput_1 = require("../inputs/CastCreateNestedOneWithoutBank_informationInput");
let BankInformationCreateInput = class BankInformationCreateInput {
};
exports.BankInformationCreateInput = BankInformationCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationCreateInput.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BankInformationCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankInformationCreateInput.prototype, "is_deleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutBank_informationInput_1.CastCreateNestedOneWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutBank_informationInput_1.CastCreateNestedOneWithoutBank_informationInput)
], BankInformationCreateInput.prototype, "cast", void 0);
exports.BankInformationCreateInput = BankInformationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationCreateInput", {})
], BankInformationCreateInput);
