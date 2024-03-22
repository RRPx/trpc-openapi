"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutAccountsInput_1 = require("../inputs/UserUncheckedCreateWithoutAccountsInput");
const UserUncheckedUpdateWithoutAccountsInput_1 = require("../inputs/UserUncheckedUpdateWithoutAccountsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutAccountsInput = exports.UserUpsertWithoutAccountsInput = class UserUpsertWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutAccountsInput_1.UserUncheckedUpdateWithoutAccountsInput)
], UserUpsertWithoutAccountsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutAccountsInput_1.UserUncheckedCreateWithoutAccountsInput)
], UserUpsertWithoutAccountsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutAccountsInput.prototype, "where", void 0);
exports.UserUpsertWithoutAccountsInput = UserUpsertWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAccountsInput", {})
], UserUpsertWithoutAccountsInput);
