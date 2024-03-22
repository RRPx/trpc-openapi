"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueNotificationArgs_1 = require("./args/FindUniqueNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let FindUniqueNotificationResolver = exports.FindUniqueNotificationResolver = class FindUniqueNotificationResolver {
    async notification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationArgs_1.FindUniqueNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueNotificationResolver.prototype, "notification", null);
exports.FindUniqueNotificationResolver = FindUniqueNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], FindUniqueNotificationResolver);
