"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Reservation_1 = require("../../../models/Reservation");
const AddressReservationArgs_1 = require("./args/AddressReservationArgs");
const helpers_1 = require("../../../helpers");
let AddressRelationsResolver = exports.AddressRelationsResolver = class AddressRelationsResolver {
    async reservation(address, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUniqueOrThrow({
            where: {
                id: address.id,
            },
        }).reservation({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Address_1.Address, Object, Object, AddressReservationArgs_1.AddressReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressRelationsResolver.prototype, "reservation", null);
exports.AddressRelationsResolver = AddressRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressRelationsResolver);
