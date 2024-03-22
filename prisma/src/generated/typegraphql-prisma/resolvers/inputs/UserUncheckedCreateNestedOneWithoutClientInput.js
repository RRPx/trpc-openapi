"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateNestedOneWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutClientInput_1 = require("../inputs/UserCreateOrConnectWithoutClientInput");
const UserUncheckedCreateWithoutClientInput_1 = require("../inputs/UserUncheckedCreateWithoutClientInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUncheckedCreateNestedOneWithoutClientInput = class UserUncheckedCreateNestedOneWithoutClientInput {
};
exports.UserUncheckedCreateNestedOneWithoutClientInput = UserUncheckedCreateNestedOneWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput)
], UserUncheckedCreateNestedOneWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutClientInput_1.UserCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutClientInput_1.UserCreateOrConnectWithoutClientInput)
], UserUncheckedCreateNestedOneWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUncheckedCreateNestedOneWithoutClientInput.prototype, "connect", void 0);
exports.UserUncheckedCreateNestedOneWithoutClientInput = UserUncheckedCreateNestedOneWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedCreateNestedOneWithoutClientInput", {})
], UserUncheckedCreateNestedOneWithoutClientInput);
