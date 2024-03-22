"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUncheckedUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAdminRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumAdminRoleFieldUpdateOperationsInput");
const EnumRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumRoleFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUncheckedUpdateWithoutSessionsInput = class UserUncheckedUpdateWithoutSessionsInput {
};
exports.UserUncheckedUpdateWithoutSessionsInput = UserUncheckedUpdateWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAdminRoleFieldUpdateOperationsInput_1.EnumAdminRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAdminRoleFieldUpdateOperationsInput_1.EnumAdminRoleFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateManyWithoutUserNestedInput_1.AccountUncheckedUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateManyWithoutUserNestedInput_1.AccountUncheckedUpdateManyWithoutUserNestedInput)
], UserUncheckedUpdateWithoutSessionsInput.prototype, "accounts", void 0);
exports.UserUncheckedUpdateWithoutSessionsInput = UserUncheckedUpdateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUncheckedUpdateWithoutSessionsInput", {})
], UserUncheckedUpdateWithoutSessionsInput);
