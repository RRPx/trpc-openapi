"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutSessionsInput_1 = require("../inputs/UserUncheckedCreateWithoutSessionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSessionsInput = class UserCreateOrConnectWithoutSessionsInput {
};
exports.UserCreateOrConnectWithoutSessionsInput = UserCreateOrConnectWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSessionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutSessionsInput_1.UserUncheckedCreateWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutSessionsInput_1.UserUncheckedCreateWithoutSessionsInput)
], UserCreateOrConnectWithoutSessionsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutSessionsInput = UserCreateOrConnectWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSessionsInput", {})
], UserCreateOrConnectWithoutSessionsInput);
