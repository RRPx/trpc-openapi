"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNotificationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueNotificationOrThrowArgs_1 = require("./args/FindUniqueNotificationOrThrowArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let FindUniqueNotificationOrThrowResolver = class FindUniqueNotificationOrThrowResolver {
    async getNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueNotificationOrThrowResolver = FindUniqueNotificationOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationOrThrowArgs_1.FindUniqueNotificationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueNotificationOrThrowResolver.prototype, "getNotification", null);
exports.FindUniqueNotificationOrThrowResolver = FindUniqueNotificationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], FindUniqueNotificationOrThrowResolver);
