"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const CastOrderByWithRelationInput_1 = require("../inputs/CastOrderByWithRelationInput");
const ClientOrderByWithRelationInput_1 = require("../inputs/ClientOrderByWithRelationInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = exports.UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "email_verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "firebase_auth_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "hash_password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "stripe_account_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "verification_image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "admin_role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByWithRelationInput_1.CastOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByWithRelationInput_1.CastOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "cast", void 0);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
], UserOrderByWithRelationInput);
