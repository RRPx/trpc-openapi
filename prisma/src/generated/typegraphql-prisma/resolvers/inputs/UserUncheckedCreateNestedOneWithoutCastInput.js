"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateNestedOneWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCastInput_1 = require("../inputs/UserCreateOrConnectWithoutCastInput");
const UserUncheckedCreateWithoutCastInput_1 = require("../inputs/UserUncheckedCreateWithoutCastInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUncheckedCreateNestedOneWithoutCastInput = class UserUncheckedCreateNestedOneWithoutCastInput {
};
exports.UserUncheckedCreateNestedOneWithoutCastInput = UserUncheckedCreateNestedOneWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput)
], UserUncheckedCreateNestedOneWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCastInput_1.UserCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCastInput_1.UserCreateOrConnectWithoutCastInput)
], UserUncheckedCreateNestedOneWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUncheckedCreateNestedOneWithoutCastInput.prototype, "connect", void 0);
exports.UserUncheckedCreateNestedOneWithoutCastInput = UserUncheckedCreateNestedOneWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedCreateNestedOneWithoutCastInput", {})
], UserUncheckedCreateNestedOneWithoutCastInput);
