"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutAccountsInput_1 = require("../inputs/UserUncheckedCreateWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAccountsInput = class UserCreateOrConnectWithoutAccountsInput {
};
exports.UserCreateOrConnectWithoutAccountsInput = UserCreateOrConnectWithoutAccountsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAccountsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput)
], UserCreateOrConnectWithoutAccountsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutAccountsInput = UserCreateOrConnectWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAccountsInput", {})
], UserCreateOrConnectWithoutAccountsInput);
