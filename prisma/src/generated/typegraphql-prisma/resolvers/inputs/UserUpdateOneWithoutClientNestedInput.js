"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutClientInput_1 = require("../inputs/UserCreateOrConnectWithoutClientInput");
const UserUncheckedCreateWithoutClientInput_1 = require("../inputs/UserUncheckedCreateWithoutClientInput");
const UserUncheckedUpdateWithoutClientInput_1 = require("../inputs/UserUncheckedUpdateWithoutClientInput");
const UserUpsertWithoutClientInput_1 = require("../inputs/UserUpsertWithoutClientInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutClientNestedInput = class UserUpdateOneWithoutClientNestedInput {
};
exports.UserUpdateOneWithoutClientNestedInput = UserUpdateOneWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutClientInput_1.UserCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutClientInput_1.UserCreateOrConnectWithoutClientInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutClientInput_1.UserUpsertWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutClientInput_1.UserUpsertWithoutClientInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput)
], UserUpdateOneWithoutClientNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutClientNestedInput = UserUpdateOneWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutClientNestedInput", {})
], UserUpdateOneWithoutClientNestedInput);
