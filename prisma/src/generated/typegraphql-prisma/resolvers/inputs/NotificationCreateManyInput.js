"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../../enums/Category");
const TargetedUser_1 = require("../../enums/TargetedUser");
let NotificationCreateManyInput = class NotificationCreateManyInput {
};
exports.NotificationCreateManyInput = NotificationCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateManyInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateManyInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateManyInput.prototype, "updated_at", void 0);
exports.NotificationCreateManyInput = NotificationCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyInput", {})
], NotificationCreateManyInput);
