"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutNotificationInput_1 = require("../inputs/ClientCreateNestedOneWithoutNotificationInput");
const Category_1 = require("../../enums/Category");
const TargetedUser_1 = require("../../enums/TargetedUser");
let NotificationCreateWithoutCastInput = class NotificationCreateWithoutCastInput {
};
exports.NotificationCreateWithoutCastInput = NotificationCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutCastInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateWithoutCastInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutCastInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutNotificationInput_1.ClientCreateNestedOneWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutNotificationInput_1.ClientCreateNestedOneWithoutNotificationInput)
], NotificationCreateWithoutCastInput.prototype, "client", void 0);
exports.NotificationCreateWithoutCastInput = NotificationCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateWithoutCastInput", {})
], NotificationCreateWithoutCastInput);
