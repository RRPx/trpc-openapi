"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyReservationArgs_1 = require("./args/FindManyReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let FindManyReservationResolver = exports.FindManyReservationResolver = class FindManyReservationResolver {
    async reservations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reservation_1.Reservation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReservationArgs_1.FindManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReservationResolver.prototype, "reservations", null);
exports.FindManyReservationResolver = FindManyReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], FindManyReservationResolver);
