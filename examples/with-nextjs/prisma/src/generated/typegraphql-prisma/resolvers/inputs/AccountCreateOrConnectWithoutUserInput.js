"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateWithoutUserInput_1 = require("../inputs/AccountUncheckedCreateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateOrConnectWithoutUserInput = exports.AccountCreateOrConnectWithoutUserInput = class AccountCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateWithoutUserInput_1.AccountUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateWithoutUserInput_1.AccountUncheckedCreateWithoutUserInput)
], AccountCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.AccountCreateOrConnectWithoutUserInput = AccountCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateOrConnectWithoutUserInput", {})
], AccountCreateOrConnectWithoutUserInput);
