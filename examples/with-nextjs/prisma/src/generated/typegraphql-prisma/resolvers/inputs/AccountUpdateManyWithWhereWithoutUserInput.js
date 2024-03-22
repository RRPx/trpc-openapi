"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUncheckedUpdateManyWithoutUserInput_1 = require("../inputs/AccountUncheckedUpdateManyWithoutUserInput");
let AccountUpdateManyWithWhereWithoutUserInput = exports.AccountUpdateManyWithWhereWithoutUserInput = class AccountUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountScalarWhereInput_1.AccountScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountScalarWhereInput_1.AccountScalarWhereInput)
], AccountUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateManyWithoutUserInput_1.AccountUncheckedUpdateManyWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateManyWithoutUserInput_1.AccountUncheckedUpdateManyWithoutUserInput)
], AccountUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.AccountUpdateManyWithWhereWithoutUserInput = AccountUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpdateManyWithWhereWithoutUserInput", {})
], AccountUpdateManyWithWhereWithoutUserInput);
