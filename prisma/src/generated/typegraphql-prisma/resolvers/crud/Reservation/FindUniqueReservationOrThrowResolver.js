"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReservationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueReservationOrThrowArgs_1 = require("./args/FindUniqueReservationOrThrowArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let FindUniqueReservationOrThrowResolver = class FindUniqueReservationOrThrowResolver {
    async getReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueReservationOrThrowResolver = FindUniqueReservationOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReservationOrThrowArgs_1.FindUniqueReservationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReservationOrThrowResolver.prototype, "getReservation", null);
exports.FindUniqueReservationOrThrowResolver = FindUniqueReservationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], FindUniqueReservationOrThrowResolver);
