"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserUncheckedUpdateWithoutCastInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutCastInput = exports.UserUpdateToOneWithWhereWithoutCastInput = class UserUpdateToOneWithWhereWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput)
], UserUpdateToOneWithWhereWithoutCastInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutCastInput = UserUpdateToOneWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCastInput", {})
], UserUpdateToOneWithWhereWithoutCastInput);
