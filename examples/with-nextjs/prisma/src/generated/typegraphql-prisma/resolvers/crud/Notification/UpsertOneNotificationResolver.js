"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneNotificationArgs_1 = require("./args/UpsertOneNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let UpsertOneNotificationResolver = exports.UpsertOneNotificationResolver = class UpsertOneNotificationResolver {
    async upsertOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneNotificationArgs_1.UpsertOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneNotificationResolver.prototype, "upsertOneNotification", null);
exports.UpsertOneNotificationResolver = UpsertOneNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], UpsertOneNotificationResolver);
