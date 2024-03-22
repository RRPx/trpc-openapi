"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAccountsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UserCreateOrConnectWithoutAccountsInput");
const UserUncheckedCreateWithoutAccountsInput_1 = require("../inputs/UserUncheckedCreateWithoutAccountsInput");
const UserUncheckedUpdateWithoutAccountsInput_1 = require("../inputs/UserUncheckedUpdateWithoutAccountsInput");
const UserUpsertWithoutAccountsInput_1 = require("../inputs/UserUpsertWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAccountsNestedInput = class UserUpdateOneRequiredWithoutAccountsNestedInput {
};
exports.UserUpdateOneRequiredWithoutAccountsNestedInput = UserUpdateOneRequiredWithoutAccountsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAccountsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutAccountsNestedInput = UserUpdateOneRequiredWithoutAccountsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountsNestedInput", {})
], UserUpdateOneRequiredWithoutAccountsNestedInput);
