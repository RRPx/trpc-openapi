"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
let AddressReservationArgs = exports.AddressReservationArgs = class AddressReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], AddressReservationArgs.prototype, "where", void 0);
exports.AddressReservationArgs = AddressReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AddressReservationArgs);
