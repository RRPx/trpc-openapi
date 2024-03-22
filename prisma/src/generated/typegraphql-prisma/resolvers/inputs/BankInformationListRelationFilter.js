"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationWhereInput_1 = require("../inputs/BankInformationWhereInput");
let BankInformationListRelationFilter = class BankInformationListRelationFilter {
};
exports.BankInformationListRelationFilter = BankInformationListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], BankInformationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], BankInformationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationWhereInput_1.BankInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationWhereInput_1.BankInformationWhereInput)
], BankInformationListRelationFilter.prototype, "none", void 0);
exports.BankInformationListRelationFilter = BankInformationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationListRelationFilter", {})
], BankInformationListRelationFilter);
