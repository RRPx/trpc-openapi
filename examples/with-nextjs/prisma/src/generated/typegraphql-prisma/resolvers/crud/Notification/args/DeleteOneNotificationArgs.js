"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let DeleteOneNotificationArgs = exports.DeleteOneNotificationArgs = class DeleteOneNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], DeleteOneNotificationArgs.prototype, "where", void 0);
exports.DeleteOneNotificationArgs = DeleteOneNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneNotificationArgs);
