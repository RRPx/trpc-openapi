"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUncheckedCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountUncheckedCreateWithoutUserInput = class AccountUncheckedCreateWithoutUserInput {
};
exports.AccountUncheckedCreateWithoutUserInput = AccountUncheckedCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "password_hash", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "providerAccountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "refresh_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "access_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AccountUncheckedCreateWithoutUserInput.prototype, "expires_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "id_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountUncheckedCreateWithoutUserInput.prototype, "session_state", void 0);
exports.AccountUncheckedCreateWithoutUserInput = AccountUncheckedCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUncheckedCreateWithoutUserInput", {})
], AccountUncheckedCreateWithoutUserInput);
