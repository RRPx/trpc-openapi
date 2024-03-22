"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateOneWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCastInput_1 = require("../inputs/UserCreateOrConnectWithoutCastInput");
const UserUncheckedCreateWithoutCastInput_1 = require("../inputs/UserUncheckedCreateWithoutCastInput");
const UserUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserUncheckedUpdateWithoutCastInput");
const UserUpsertWithoutCastInput_1 = require("../inputs/UserUpsertWithoutCastInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUncheckedUpdateOneWithoutCastNestedInput = class UserUncheckedUpdateOneWithoutCastNestedInput {
};
exports.UserUncheckedUpdateOneWithoutCastNestedInput = UserUncheckedUpdateOneWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateWithoutCastInput_1.UserUncheckedCreateWithoutCastInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCastInput_1.UserCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCastInput_1.UserCreateOrConnectWithoutCastInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCastInput_1.UserUpsertWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCastInput_1.UserUpsertWithoutCastInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateWithoutCastInput_1.UserUncheckedUpdateWithoutCastInput)
], UserUncheckedUpdateOneWithoutCastNestedInput.prototype, "update", void 0);
exports.UserUncheckedUpdateOneWithoutCastNestedInput = UserUncheckedUpdateOneWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedUpdateOneWithoutCastNestedInput", {})
], UserUncheckedUpdateOneWithoutCastNestedInput);
