"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutClientInput_1 = require("../inputs/UserUncheckedCreateWithoutClientInput");
const UserUncheckedUpdateWithoutClientInput_1 = require("../inputs/UserUncheckedUpdateWithoutClientInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutClientInput = exports.UserUpsertWithoutClientInput = class UserUpsertWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutClientInput_1.UserUncheckedUpdateWithoutClientInput)
], UserUpsertWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutClientInput_1.UserUncheckedCreateWithoutClientInput)
], UserUpsertWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutClientInput.prototype, "where", void 0);
exports.UserUpsertWithoutClientInput = UserUpsertWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutClientInput", {})
], UserUpsertWithoutClientInput);
