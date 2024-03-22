"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const OptionMaster_1 = require("../../../models/OptionMaster");
const Reservation_1 = require("../../../models/Reservation");
const OptionMasterCastArgs_1 = require("./args/OptionMasterCastArgs");
const OptionMasterReservationArgs_1 = require("./args/OptionMasterReservationArgs");
const helpers_1 = require("../../../helpers");
let OptionMasterRelationsResolver = class OptionMasterRelationsResolver {
    async cast(optionMaster, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUniqueOrThrow({
            where: {
                id: optionMaster.id,
            },
        }).cast({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reservation(optionMaster, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUniqueOrThrow({
            where: {
                id: optionMaster.id,
            },
        }).reservation({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OptionMasterRelationsResolver = OptionMasterRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Cast_1.Cast], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OptionMaster_1.OptionMaster, Object, Object, OptionMasterCastArgs_1.OptionMasterCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterRelationsResolver.prototype, "cast", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reservation_1.Reservation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OptionMaster_1.OptionMaster, Object, Object, OptionMasterReservationArgs_1.OptionMasterReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionMasterRelationsResolver.prototype, "reservation", null);
exports.OptionMasterRelationsResolver = OptionMasterRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], OptionMasterRelationsResolver);
