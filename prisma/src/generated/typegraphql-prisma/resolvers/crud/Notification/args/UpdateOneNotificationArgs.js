"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedUpdateInput_1 = require("../../../inputs/NotificationUncheckedUpdateInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let UpdateOneNotificationArgs = class UpdateOneNotificationArgs {
};
exports.UpdateOneNotificationArgs = UpdateOneNotificationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateInput_1.NotificationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateInput_1.NotificationUncheckedUpdateInput)
], UpdateOneNotificationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], UpdateOneNotificationArgs.prototype, "where", void 0);
exports.UpdateOneNotificationArgs = UpdateOneNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneNotificationArgs);
