"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const Client_1 = require("../../../models/Client");
const Notification_1 = require("../../../models/Notification");
const NotificationCastArgs_1 = require("./args/NotificationCastArgs");
const NotificationClientArgs_1 = require("./args/NotificationClientArgs");
const helpers_1 = require("../../../helpers");
let NotificationRelationsResolver = class NotificationRelationsResolver {
    async cast(notification, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUniqueOrThrow({
            where: {
                id: notification.id,
            },
        }).cast({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(notification, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUniqueOrThrow({
            where: {
                id: notification.id,
            },
        }).client({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.NotificationRelationsResolver = NotificationRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Notification_1.Notification, Object, Object, NotificationCastArgs_1.NotificationCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationRelationsResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Notification_1.Notification, Object, Object, NotificationClientArgs_1.NotificationClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationRelationsResolver.prototype, "client", null);
exports.NotificationRelationsResolver = NotificationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], NotificationRelationsResolver);
