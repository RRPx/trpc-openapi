"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneNotificationArgs_1 = require("./args/UpdateOneNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let UpdateOneNotificationResolver = class UpdateOneNotificationResolver {
    async updateOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneNotificationResolver = UpdateOneNotificationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneNotificationArgs_1.UpdateOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneNotificationResolver.prototype, "updateOneNotification", null);
exports.UpdateOneNotificationResolver = UpdateOneNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], UpdateOneNotificationResolver);
