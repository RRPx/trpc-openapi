"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstReservationArgs_1 = require("./args/FindFirstReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let FindFirstReservationResolver = exports.FindFirstReservationResolver = class FindFirstReservationResolver {
    async findFirstReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReservationArgs_1.FindFirstReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstReservationResolver.prototype, "findFirstReservation", null);
exports.FindFirstReservationResolver = FindFirstReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], FindFirstReservationResolver);
