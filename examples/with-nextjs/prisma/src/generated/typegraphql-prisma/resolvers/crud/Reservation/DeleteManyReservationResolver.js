"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReservationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyReservationArgs_1 = require("./args/DeleteManyReservationArgs");
const Reservation_1 = require("../../../models/Reservation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyReservationResolver = exports.DeleteManyReservationResolver = class DeleteManyReservationResolver {
    async deleteManyReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReservationArgs_1.DeleteManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyReservationResolver.prototype, "deleteManyReservation", null);
exports.DeleteManyReservationResolver = DeleteManyReservationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], DeleteManyReservationResolver);
