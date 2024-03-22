"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateInput_1 = require("../../../inputs/NotificationUncheckedCreateInput");
const NotificationUncheckedUpdateInput_1 = require("../../../inputs/NotificationUncheckedUpdateInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let UpsertOneNotificationArgs = class UpsertOneNotificationArgs {
};
exports.UpsertOneNotificationArgs = UpsertOneNotificationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], UpsertOneNotificationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateInput_1.NotificationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateInput_1.NotificationUncheckedCreateInput)
], UpsertOneNotificationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateInput_1.NotificationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateInput_1.NotificationUncheckedUpdateInput)
], UpsertOneNotificationArgs.prototype, "update", void 0);
exports.UpsertOneNotificationArgs = UpsertOneNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneNotificationArgs);
