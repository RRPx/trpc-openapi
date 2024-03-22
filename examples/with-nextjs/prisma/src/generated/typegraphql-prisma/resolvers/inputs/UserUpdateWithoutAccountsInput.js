"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUpdateOneWithoutUserNestedInput_1 = require("../inputs/CastUpdateOneWithoutUserNestedInput");
const ClientUpdateOneWithoutUsersNestedInput_1 = require("../inputs/ClientUpdateOneWithoutUsersNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAdminRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumAdminRoleFieldUpdateOperationsInput");
const EnumRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumRoleFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutAccountsInput = exports.UserUpdateWithoutAccountsInput = class UserUpdateWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAdminRoleFieldUpdateOperationsInput_1.EnumAdminRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAdminRoleFieldUpdateOperationsInput_1.EnumAdminRoleFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneWithoutUsersNestedInput_1.ClientUpdateOneWithoutUsersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneWithoutUsersNestedInput_1.ClientUpdateOneWithoutUsersNestedInput)
], UserUpdateWithoutAccountsInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneWithoutUserNestedInput_1.CastUpdateOneWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneWithoutUserNestedInput_1.CastUpdateOneWithoutUserNestedInput)
], UserUpdateWithoutAccountsInput.prototype, "cast", void 0);
exports.UserUpdateWithoutAccountsInput = UserUpdateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutAccountsInput", {})
], UserUpdateWithoutAccountsInput);
