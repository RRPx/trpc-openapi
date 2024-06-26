"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUncheckedCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateManyUserInputEnvelope_1 = require("../inputs/AccountCreateManyUserInputEnvelope");
const AccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AccountCreateOrConnectWithoutUserInput");
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUncheckedCreateNestedManyWithoutUserInput = exports.AccountUncheckedCreateNestedManyWithoutUserInput = class AccountUncheckedCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope)
], AccountUncheckedCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.AccountUncheckedCreateNestedManyWithoutUserInput = AccountUncheckedCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUncheckedCreateNestedManyWithoutUserInput", {})
], AccountUncheckedCreateNestedManyWithoutUserInput);
