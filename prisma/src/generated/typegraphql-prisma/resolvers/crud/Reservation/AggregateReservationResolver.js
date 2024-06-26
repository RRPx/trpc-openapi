"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReservationArgs_1 = require("./args/AggregateReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const AggregateReservation_1 = require("../../outputs/AggregateReservation");
const helpers_1 = require("../../../helpers");
let AggregateReservationResolver = class AggregateReservationResolver {
    async aggregateReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateReservationResolver = AggregateReservationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReservation_1.AggregateReservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReservationArgs_1.AggregateReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReservationResolver.prototype, "aggregateReservation", null);
exports.AggregateReservationResolver = AggregateReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], AggregateReservationResolver);
