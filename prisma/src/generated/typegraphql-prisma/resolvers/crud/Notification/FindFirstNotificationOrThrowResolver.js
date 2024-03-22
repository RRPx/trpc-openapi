"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNotificationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstNotificationOrThrowArgs_1 = require("./args/FindFirstNotificationOrThrowArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let FindFirstNotificationOrThrowResolver = class FindFirstNotificationOrThrowResolver {
    async findFirstNotificationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstNotificationOrThrowResolver = FindFirstNotificationOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationOrThrowArgs_1.FindFirstNotificationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstNotificationOrThrowResolver.prototype, "findFirstNotificationOrThrow", null);
exports.FindFirstNotificationOrThrowResolver = FindFirstNotificationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], FindFirstNotificationOrThrowResolver);
