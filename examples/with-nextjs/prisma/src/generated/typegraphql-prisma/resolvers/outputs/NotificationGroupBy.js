"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCountAggregate_1 = require("../outputs/NotificationCountAggregate");
const NotificationMaxAggregate_1 = require("../outputs/NotificationMaxAggregate");
const NotificationMinAggregate_1 = require("../outputs/NotificationMinAggregate");
const Category_1 = require("../../enums/Category");
const TargetedUser_1 = require("../../enums/TargetedUser");
let NotificationGroupBy = exports.NotificationGroupBy = class NotificationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationGroupBy.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationGroupBy.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCountAggregate_1.NotificationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCountAggregate_1.NotificationCountAggregate)
], NotificationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMinAggregate_1.NotificationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMinAggregate_1.NotificationMinAggregate)
], NotificationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMaxAggregate_1.NotificationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMaxAggregate_1.NotificationMaxAggregate)
], NotificationGroupBy.prototype, "_max", void 0);
exports.NotificationGroupBy = NotificationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NotificationGroupBy", {})
], NotificationGroupBy);
