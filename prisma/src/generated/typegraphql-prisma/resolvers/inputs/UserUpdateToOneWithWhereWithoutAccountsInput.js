"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedUpdateWithoutAccountsInput_1 = require("../inputs/UserUncheckedUpdateWithoutAccountsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutAccountsInput = class UserUpdateToOneWithWhereWithoutAccountsInput {
};
exports.UserUpdateToOneWithWhereWithoutAccountsInput = UserUpdateToOneWithWhereWithoutAccountsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutAccountsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput)
], UserUpdateToOneWithWhereWithoutAccountsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutAccountsInput = UserUpdateToOneWithWhereWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAccountsInput", {})
], UserUpdateToOneWithWhereWithoutAccountsInput);
