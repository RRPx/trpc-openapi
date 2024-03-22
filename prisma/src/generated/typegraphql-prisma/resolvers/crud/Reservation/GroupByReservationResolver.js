"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByReservationArgs_1 = require("./args/GroupByReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const ReservationGroupBy_1 = require("../../outputs/ReservationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReservationResolver = class GroupByReservationResolver {
    async groupByReservation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByReservationResolver = GroupByReservationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReservationGroupBy_1.ReservationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReservationArgs_1.GroupByReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReservationResolver.prototype, "groupByReservation", null);
exports.GroupByReservationResolver = GroupByReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], GroupByReservationResolver);
