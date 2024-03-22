"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutClientInput_1 = require("../inputs/UserUncheckedCreateWithoutClientInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutClientInput = class UserCreateOrConnectWithoutClientInput {
};
exports.UserCreateOrConnectWithoutClientInput = UserCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput)
], UserCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutClientInput = UserCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutClientInput", {})
], UserCreateOrConnectWithoutClientInput);
