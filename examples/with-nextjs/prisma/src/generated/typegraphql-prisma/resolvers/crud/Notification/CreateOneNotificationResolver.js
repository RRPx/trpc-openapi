"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneNotificationArgs_1 = require("./args/CreateOneNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let CreateOneNotificationResolver = exports.CreateOneNotificationResolver = class CreateOneNotificationResolver {
    async createOneNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneNotificationArgs_1.CreateOneNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneNotificationResolver.prototype, "createOneNotification", null);
exports.CreateOneNotificationResolver = CreateOneNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], CreateOneNotificationResolver);
