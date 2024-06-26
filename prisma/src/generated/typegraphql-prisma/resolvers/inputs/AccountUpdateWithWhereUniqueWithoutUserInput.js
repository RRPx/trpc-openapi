"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedUpdateWithoutUserInput_1 = require("../inputs/AccountUncheckedUpdateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateWithWhereUniqueWithoutUserInput = class AccountUpdateWithWhereUniqueWithoutUserInput {
};
exports.AccountUpdateWithWhereUniqueWithoutUserInput = AccountUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateWithoutUserInput_1.AccountUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateWithoutUserInput_1.AccountUncheckedUpdateWithoutUserInput)
], AccountUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.AccountUpdateWithWhereUniqueWithoutUserInput = AccountUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpdateWithWhereUniqueWithoutUserInput", {})
], AccountUpdateWithWhereUniqueWithoutUserInput);
