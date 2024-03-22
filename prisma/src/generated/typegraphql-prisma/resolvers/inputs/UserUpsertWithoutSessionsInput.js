"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateWithoutSessionsInput_1 = require("../inputs/UserUncheckedCreateWithoutSessionsInput");
const UserUncheckedUpdateWithoutSessionsInput_1 = require("../inputs/UserUncheckedUpdateWithoutSessionsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutSessionsInput = class UserUpsertWithoutSessionsInput {
};
exports.UserUpsertWithoutSessionsInput = UserUpsertWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutSessionsInput_1.UserUncheckedUpdateWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutSessionsInput_1.UserUncheckedUpdateWithoutSessionsInput)
], UserUpsertWithoutSessionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutSessionsInput_1.UserUncheckedCreateWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutSessionsInput_1.UserUncheckedCreateWithoutSessionsInput)
], UserUpsertWithoutSessionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutSessionsInput.prototype, "where", void 0);
exports.UserUpsertWithoutSessionsInput = UserUpsertWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutSessionsInput", {})
], UserUpsertWithoutSessionsInput);
