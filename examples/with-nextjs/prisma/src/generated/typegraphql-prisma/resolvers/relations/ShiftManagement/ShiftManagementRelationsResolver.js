"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const Reservation_1 = require("../../../models/Reservation");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const ShiftManagementReservationArgs_1 = require("./args/ShiftManagementReservationArgs");
const helpers_1 = require("../../../helpers");
let ShiftManagementRelationsResolver = exports.ShiftManagementRelationsResolver = class ShiftManagementRelationsResolver {
    async cast(shiftManagement, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findUniqueOrThrow({
            where: {
                id: shiftManagement.id,
            },
        }).cast({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Reservation(shiftManagement, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findUniqueOrThrow({
            where: {
                id: shiftManagement.id,
            },
        }).Reservation({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ShiftManagement_1.ShiftManagement, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementRelationsResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ShiftManagement_1.ShiftManagement, Object, Object, ShiftManagementReservationArgs_1.ShiftManagementReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShiftManagementRelationsResolver.prototype, "Reservation", null);
exports.ShiftManagementRelationsResolver = ShiftManagementRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], ShiftManagementRelationsResolver);
