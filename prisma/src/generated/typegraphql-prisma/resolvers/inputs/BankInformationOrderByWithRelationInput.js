"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByWithRelationInput_1 = require("../inputs/CastOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BankInformationOrderByWithRelationInput = class BankInformationOrderByWithRelationInput {
};
exports.BankInformationOrderByWithRelationInput = BankInformationOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "bank_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "bank_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "bank_finance_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BankInformationOrderByWithRelationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BankInformationOrderByWithRelationInput.prototype, "is_deleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByWithRelationInput_1.CastOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByWithRelationInput_1.CastOrderByWithRelationInput)
], BankInformationOrderByWithRelationInput.prototype, "cast", void 0);
exports.BankInformationOrderByWithRelationInput = BankInformationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationOrderByWithRelationInput", {})
], BankInformationOrderByWithRelationInput);
