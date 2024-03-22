"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneReservationArgs_1 = require("./args/CreateOneReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const helpers_1 = require("../../../helpers");
let CreateOneReservationResolver = class CreateOneReservationResolver {
    async createOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneReservationResolver = CreateOneReservationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReservationArgs_1.CreateOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneReservationResolver.prototype, "createOneReservation", null);
exports.CreateOneReservationResolver = CreateOneReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], CreateOneReservationResolver);
