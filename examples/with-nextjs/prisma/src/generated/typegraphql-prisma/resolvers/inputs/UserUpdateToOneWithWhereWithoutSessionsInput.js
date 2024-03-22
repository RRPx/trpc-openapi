"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedUpdateWithoutSessionsInput_1 = require("../inputs/UserUncheckedUpdateWithoutSessionsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutSessionsInput = exports.UserUpdateToOneWithWhereWithoutSessionsInput = class UserUpdateToOneWithWhereWithoutSessionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutSessionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutSessionsInput_1.UserUncheckedUpdateWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutSessionsInput_1.UserUncheckedUpdateWithoutSessionsInput)
], UserUpdateToOneWithWhereWithoutSessionsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutSessionsInput = UserUpdateToOneWithWhereWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutSessionsInput", {})
], UserUpdateToOneWithWhereWithoutSessionsInput);
