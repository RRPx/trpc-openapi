"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyNotificationArgs_1 = require("./args/DeleteManyNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyNotificationResolver = class DeleteManyNotificationResolver {
    async deleteManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyNotificationResolver = DeleteManyNotificationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNotificationArgs_1.DeleteManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyNotificationResolver.prototype, "deleteManyNotification", null);
exports.DeleteManyNotificationResolver = DeleteManyNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], DeleteManyNotificationResolver);
