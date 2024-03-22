"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedUpdateManyInput_1 = require("../../../inputs/NotificationUncheckedUpdateManyInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
let UpdateManyNotificationArgs = class UpdateManyNotificationArgs {
};
exports.UpdateManyNotificationArgs = UpdateManyNotificationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyInput_1.NotificationUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyInput_1.NotificationUncheckedUpdateManyInput)
], UpdateManyNotificationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], UpdateManyNotificationArgs.prototype, "where", void 0);
exports.UpdateManyNotificationArgs = UpdateManyNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyNotificationArgs);
