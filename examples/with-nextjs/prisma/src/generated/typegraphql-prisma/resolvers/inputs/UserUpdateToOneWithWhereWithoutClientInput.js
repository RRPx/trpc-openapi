"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedUpdateWithoutClientInput_1 = require("../inputs/UserUncheckedUpdateWithoutClientInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutClientInput = exports.UserUpdateToOneWithWhereWithoutClientInput = class UserUpdateToOneWithWhereWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput)
], UserUpdateToOneWithWhereWithoutClientInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutClientInput = UserUpdateToOneWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutClientInput", {})
], UserUpdateToOneWithWhereWithoutClientInput);
