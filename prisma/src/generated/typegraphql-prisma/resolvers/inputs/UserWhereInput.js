"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const CastNullableRelationFilter_1 = require("../inputs/CastNullableRelationFilter");
const ClientNullableRelationFilter_1 = require("../inputs/ClientNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumAdminRoleFilter_1 = require("../inputs/EnumAdminRoleFilter");
const EnumRoleFilter_1 = require("../inputs/EnumRoleFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = class UserWhereInput {
};
exports.UserWhereInput = UserWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAdminRoleFilter_1.EnumAdminRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAdminRoleFilter_1.EnumAdminRoleFilter)
], UserWhereInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleFilter_1.EnumRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleFilter_1.EnumRoleFilter)
], UserWhereInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientNullableRelationFilter_1.ClientNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientNullableRelationFilter_1.ClientNullableRelationFilter)
], UserWhereInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastNullableRelationFilter_1.CastNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastNullableRelationFilter_1.CastNullableRelationFilter)
], UserWhereInput.prototype, "cast", void 0);
exports.UserWhereInput = UserWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {})
], UserWhereInput);
