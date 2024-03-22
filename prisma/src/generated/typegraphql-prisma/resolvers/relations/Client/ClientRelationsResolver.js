"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Client_1 = require("../../../models/Client");
const Favorite_1 = require("../../../models/Favorite");
const Notification_1 = require("../../../models/Notification");
const Reservation_1 = require("../../../models/Reservation");
const Review_1 = require("../../../models/Review");
const User_1 = require("../../../models/User");
const ClientFavoriteArgs_1 = require("./args/ClientFavoriteArgs");
const ClientNotificationArgs_1 = require("./args/ClientNotificationArgs");
const ClientReservationArgs_1 = require("./args/ClientReservationArgs");
const ClientReviewArgs_1 = require("./args/ClientReviewArgs");
const ClientUsersArgs_1 = require("./args/ClientUsersArgs");
const helpers_1 = require("../../../helpers");
let ClientRelationsResolver = class ClientRelationsResolver {
    async users(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).users({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async favorite(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).favorite({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reservation(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).reservation({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async review(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).review({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async notification(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).notification({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ClientRelationsResolver = ClientRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientUsersArgs_1.ClientUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "users", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Favorite_1.Favorite], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientFavoriteArgs_1.ClientFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "favorite", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reservation_1.Reservation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientReservationArgs_1.ClientReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "reservation", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Review_1.Review], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientReviewArgs_1.ClientReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "review", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientNotificationArgs_1.ClientNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "notification", null);
exports.ClientRelationsResolver = ClientRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], ClientRelationsResolver);
