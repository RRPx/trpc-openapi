"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Cast_1 = require("../../../models/Cast");
const ChatRoom_1 = require("../../../models/ChatRoom");
const Client_1 = require("../../../models/Client");
const OptionMaster_1 = require("../../../models/OptionMaster");
const Reservation_1 = require("../../../models/Reservation");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const ReservationChat_roomArgs_1 = require("./args/ReservationChat_roomArgs");
const ReservationOption_idArgs_1 = require("./args/ReservationOption_idArgs");
const ReservationShift_idArgs_1 = require("./args/ReservationShift_idArgs");
const helpers_1 = require("../../../helpers");
let ReservationRelationsResolver = exports.ReservationRelationsResolver = class ReservationRelationsResolver {
    async cast(reservation, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).cast({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(reservation, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async option_id(reservation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).option_id({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shift_id(reservation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).shift_id({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async chat_room(reservation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).chat_room({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async address(reservation, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            where: {
                id: reservation.id,
            },
        }).address({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "client", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OptionMaster_1.OptionMaster], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object, ReservationOption_idArgs_1.ReservationOption_idArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "option_id", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ShiftManagement_1.ShiftManagement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object, ReservationShift_idArgs_1.ReservationShift_idArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "shift_id", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ChatRoom_1.ChatRoom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object, ReservationChat_roomArgs_1.ReservationChat_roomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "chat_room", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Address_1.Address, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reservation_1.Reservation, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationRelationsResolver.prototype, "address", null);
exports.ReservationRelationsResolver = ReservationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], ReservationRelationsResolver);
