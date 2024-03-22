"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountUncheckedCreateNestedManyWithoutUserInput");
const AdminRole_1 = require("../../enums/AdminRole");
const Role_1 = require("../../enums/Role");
let UserUncheckedCreateWithoutSessionsInput = class UserUncheckedCreateWithoutSessionsInput {
};
exports.UserUncheckedCreateWithoutSessionsInput = UserUncheckedCreateWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutSessionsInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutSessionsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateNestedManyWithoutUserInput_1.AccountUncheckedCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateNestedManyWithoutUserInput_1.AccountUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutSessionsInput.prototype, "accounts", void 0);
exports.UserUncheckedCreateWithoutSessionsInput = UserUncheckedCreateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedCreateWithoutSessionsInput", {})
], UserUncheckedCreateWithoutSessionsInput);
