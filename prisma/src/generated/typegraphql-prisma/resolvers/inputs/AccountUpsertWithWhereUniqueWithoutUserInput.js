"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateWithoutUserInput_1 = require("../inputs/AccountUncheckedCreateWithoutUserInput");
const AccountUncheckedUpdateWithoutUserInput_1 = require("../inputs/AccountUncheckedUpdateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpsertWithWhereUniqueWithoutUserInput = class AccountUpsertWithWhereUniqueWithoutUserInput {
};
exports.AccountUpsertWithWhereUniqueWithoutUserInput = AccountUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateWithoutUserInput_1.AccountUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateWithoutUserInput_1.AccountUncheckedUpdateWithoutUserInput)
], AccountUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateWithoutUserInput_1.AccountUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateWithoutUserInput_1.AccountUncheckedCreateWithoutUserInput)
], AccountUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.AccountUpsertWithWhereUniqueWithoutUserInput = AccountUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUserInput", {})
], AccountUpsertWithWhereUniqueWithoutUserInput);
