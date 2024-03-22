"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountUncheckedCreateNestedManyWithoutUserInput");
const SessionUncheckedCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionUncheckedCreateNestedManyWithoutUserInput");
const AdminRole_1 = require("../../enums/AdminRole");
const Role_1 = require("../../enums/Role");
let UserUncheckedCreateWithoutClientInput = exports.UserUncheckedCreateWithoutClientInput = class UserUncheckedCreateWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutClientInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutClientInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateNestedManyWithoutUserInput_1.AccountUncheckedCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateNestedManyWithoutUserInput_1.AccountUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutClientInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateNestedManyWithoutUserInput_1.SessionUncheckedCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateNestedManyWithoutUserInput_1.SessionUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutClientInput.prototype, "sessions", void 0);
exports.UserUncheckedCreateWithoutClientInput = UserUncheckedCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedCreateWithoutClientInput", {})
], UserUncheckedCreateWithoutClientInput);
