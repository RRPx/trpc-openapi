"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionUncheckedCreateNestedManyWithoutUserInput");
const AdminRole_1 = require("../../enums/AdminRole");
const Role_1 = require("../../enums/Role");
let UserUncheckedCreateWithoutAccountsInput = class UserUncheckedCreateWithoutAccountsInput {
};
exports.UserUncheckedCreateWithoutAccountsInput = UserUncheckedCreateWithoutAccountsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutAccountsInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserUncheckedCreateWithoutAccountsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserUncheckedCreateWithoutAccountsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateNestedManyWithoutUserInput_1.SessionUncheckedCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateNestedManyWithoutUserInput_1.SessionUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutAccountsInput.prototype, "sessions", void 0);
exports.UserUncheckedCreateWithoutAccountsInput = UserUncheckedCreateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedCreateWithoutAccountsInput", {})
], UserUncheckedCreateWithoutAccountsInput);
