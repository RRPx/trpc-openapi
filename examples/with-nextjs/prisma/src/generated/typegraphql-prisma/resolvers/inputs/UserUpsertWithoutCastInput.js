"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutCastInput_1 = require("../inputs/UserUncheckedCreateWithoutCastInput");
const UserUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserUncheckedUpdateWithoutCastInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutCastInput = exports.UserUpsertWithoutCastInput = class UserUpsertWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput)
], UserUpsertWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput)
], UserUpsertWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutCastInput.prototype, "where", void 0);
exports.UserUpsertWithoutCastInput = UserUpsertWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCastInput", {})
], UserUpsertWithoutCastInput);
