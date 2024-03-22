"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyReservationArgs_1 = require("./args/UpdateManyReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyReservationResolver = exports.UpdateManyReservationResolver = class UpdateManyReservationResolver {
    async updateManyReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReservationArgs_1.UpdateManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyReservationResolver.prototype, "updateManyReservation", null);
exports.UpdateManyReservationResolver = UpdateManyReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], UpdateManyReservationResolver);
