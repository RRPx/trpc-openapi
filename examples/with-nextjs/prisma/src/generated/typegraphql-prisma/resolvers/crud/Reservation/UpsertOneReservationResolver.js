"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneReservationArgs_1 = require("./args/UpsertOneReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let UpsertOneReservationResolver = exports.UpsertOneReservationResolver = class UpsertOneReservationResolver {
    async upsertOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReservationArgs_1.UpsertOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneReservationResolver.prototype, "upsertOneReservation", null);
exports.UpsertOneReservationResolver = UpsertOneReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], UpsertOneReservationResolver);
