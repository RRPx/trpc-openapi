"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReservationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstReservationOrThrowArgs_1 = require("./args/FindFirstReservationOrThrowArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let FindFirstReservationOrThrowResolver = exports.FindFirstReservationOrThrowResolver = class FindFirstReservationOrThrowResolver {
    async findFirstReservationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReservationOrThrowArgs_1.FindFirstReservationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstReservationOrThrowResolver.prototype, "findFirstReservationOrThrow", null);
exports.FindFirstReservationOrThrowResolver = FindFirstReservationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], FindFirstReservationOrThrowResolver);
