"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const CastCreateNestedOneWithoutUserInput_1 = require("../inputs/CastCreateNestedOneWithoutUserInput");
const ClientCreateNestedOneWithoutUsersInput_1 = require("../inputs/ClientCreateNestedOneWithoutUsersInput");
const AdminRole_1 = require("../../enums/AdminRole");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutSessionsInput = exports.UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutUsersInput_1.ClientCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutUsersInput_1.ClientCreateNestedOneWithoutUsersInput)
], UserCreateWithoutSessionsInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutUserInput_1.CastCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutUserInput_1.CastCreateNestedOneWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "cast", void 0);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {})
], UserCreateWithoutSessionsInput);
