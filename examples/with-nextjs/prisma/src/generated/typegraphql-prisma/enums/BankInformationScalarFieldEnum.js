"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BankInformationScalarFieldEnum;
(function (BankInformationScalarFieldEnum) {
    BankInformationScalarFieldEnum["id"] = "id";
    BankInformationScalarFieldEnum["bank_name"] = "bank_name";
    BankInformationScalarFieldEnum["bank_number"] = "bank_number";
    BankInformationScalarFieldEnum["bank_finance_code"] = "bank_finance_code";
    BankInformationScalarFieldEnum["account_name"] = "account_name";
    BankInformationScalarFieldEnum["account_number"] = "account_number";
    BankInformationScalarFieldEnum["account_type"] = "account_type";
    BankInformationScalarFieldEnum["cast_id"] = "cast_id";
    BankInformationScalarFieldEnum["created_at"] = "created_at";
    BankInformationScalarFieldEnum["updated_at"] = "updated_at";
    BankInformationScalarFieldEnum["is_deleted"] = "is_deleted";
})(BankInformationScalarFieldEnum || (exports.BankInformationScalarFieldEnum = BankInformationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BankInformationScalarFieldEnum, {
    name: "BankInformationScalarFieldEnum",
    description: undefined,
});
