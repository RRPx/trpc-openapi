"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNotificationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let FindUniqueNotificationOrThrowArgs = class FindUniqueNotificationOrThrowArgs {
};
exports.FindUniqueNotificationOrThrowArgs = FindUniqueNotificationOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], FindUniqueNotificationOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueNotificationOrThrowArgs = FindUniqueNotificationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNotificationOrThrowArgs);
